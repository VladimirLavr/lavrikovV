import {createReadStream} from 'fs';
import {createServer} from 'http';
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';
import {StringDecoder} from "string_decoder";


const __dirname = dirname(fileURLToPath(import.meta.url));

console.clear();

let orders = [];

let newOrder;

let eventsOfOrder = ["start order", "cooking order", "packing order", "delivering order"];

let currentStatus = 'cooking order';

const sse = (req, res, orderId) => {
    console.log(orders)
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    let findOrder = orders.find(item => item.id === orderId);

    if (!findOrder) {
        res.write('event: order-not-found\n');
        res.write('data: null\n');
        res.write(`id: ${orderId}`);
        res.write(`\n`);
        res.end();
        return;
    }


    const intervalId = setInterval(() => {
        if (currentStatus !== eventsOfOrder[3]) {
            res.write('event: pizza-order-status-update\n');
            res.write(`id: ${orderId}\n`);
            res.write(`data: ${currentStatus}\n`);
            res.write(`\n`);
        }

        clearInterval(intervalId);

    }, 1000);


    if (currentStatus === eventsOfOrder[3]) {
        res.write('event: delivered\n');
        res.write(`id: ${orderId}\n`);
        res.write('data: null\n');
        res.write(`\n`);
        res.end();

        clearInterval(intervalId);
    }
};


const orderCreate = (url, method, buffer, req, res) => {

    if (url.pathname === "/orderPizza" && method === 'post') {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.statusCode = 201;
        newOrder = {id: 2, description: buffer}

        orders.push(newOrder);

        res.end(JSON.stringify(newOrder));
    }
}


const httpServer = createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const url = new URL(`http://${req.headers.host}${req.url}`);
    const method = req.method.toLowerCase();
    const decoder = new StringDecoder("utf-8");
    let buffer = "";


    req.on("data", function (data) {
        buffer += decoder.write(data);
    });


    req.on("end", function () {
        buffer += decoder.end();
        orderCreate(url, method, buffer, req, res);
    });


    if (url.pathname === "/sse") {
        let orderId = 2
        sse(req, res, orderId);
        return;
    }

    const fileStream = createReadStream(join(__dirname, "../client/index.html"));
    fileStream.pipe(res);

});

httpServer.listen(8080, () => console.log("Server is started on port 8080"));



