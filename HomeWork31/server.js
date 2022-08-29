import express from "express";
import bodyParser from "body-parser";

import {initializeApp} from "firebase/app";
import {getFirestore, collection, getDocs, updateDoc, addDoc, doc} from 'firebase/firestore';


import {delMasters,masters} from "./Masters.js";
import {getCategories} from "./getCategories.js";
import {getCategoriesListServices} from "./ListCategories.js";
import {deleleOrder, order} from "./OrderList.js";

import {Masters} from "./Masters.js"


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

let Lavrikov = [];

const firebaseConfig = {
    apiKey: "AIzaSyDsPcJGLa20qCr3Jw4Jv3LLdpv3bE43faY",
    authDomain: "lavrikov-b6565.firebaseapp.com",
    projectId: "lavrikov-b6565",
    storageBucket: "lavrikov-b6565.appspot.com",
    messagingSenderId: "90042396730",
    appId: "1:90042396730:web:a745e22e1c9c3544358503",
    measurementId: "G-JL28DKHV09"
};


initializeApp(firebaseConfig);

const db = getFirestore();


app.post('/NewMaster', async function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    let createMaster = req.body
    let newMaster = {
        id: Masters.length + 1,
        name: createMaster.name
    }

    await updateDoc(doc(db, 'Lavrikov', "ZdNsaN2jbDHAEBtw3Axq/Masters"), {
        id: 1,
        name:createMaster.name
    });
    res.send(createMaster);
});



app.delete('/DeleteMaster', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    let deleteMaster = req.body
    delMasters(deleteMaster)
    console.log('receiving data ...');
    console.log('body is ', deleteMaster);
    res.send(deleteMaster);
});

app.post('/CreateOrder', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    let orderCreate = req.body
    console.log(orderCreate)
    order(orderCreate)
    console.log('receiving data ...');
    console.log('body is ', req.body);
    res.send(req.body);
});

app.delete('/DeleteOrder', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    let delOrder = req.body
    deleleOrder(delOrder)
    console.log('receiving data ...');
    console.log('body is ', req.body);
    res.send(req.body);
});

const colRef = collection(db, 'Lavrikov')

getDocs(colRef).then((snapshoot) => {

    snapshoot.docs.forEach((doc) => {
        Lavrikov.push({...doc.data(), id: doc.id})
    })

})


app.get("/Masters", (req, res) => {
    res.status(200);
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(JSON.stringify(masters(Lavrikov)))

})

app.get("/orders", (req, res) => {
    res.status(200);
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(JSON.stringify(order()))

})

app.get("/Categories", async (req, res) => {
    res.status(200);
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(JSON.stringify(getCategories(Lavrikov)))
})


app.get("/CategoriesListServices", (req, res) => {
    res.status(200);
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(JSON.stringify(getCategoriesListServices(Lavrikov)))

})


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})



