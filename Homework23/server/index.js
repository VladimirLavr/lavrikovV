import { createServer } from "http";
import { StringDecoder } from "string_decoder";

import { getAllTodos, createTodo, deleteTodo } from "../server/main.js";

const handler = (url, method, buffer, res) => {
  if (url.pathname === "/todos") {
    if (method === "get") {
      
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(JSON.stringify(getAllTodos()));
      return;
    }

    if (method === "post") {
      const todo = createTodo(JSON.parse(buffer));
      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(JSON.stringify(todo));
      
      return;
    }
  }

  if (url.pathname.includes("/todos/") && method === "delete") {
    const id = url.pathname.slice(7);
    const status = deleteTodo(id);

    if (status) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(JSON.stringify({ status, id }));
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(JSON.stringify({ status, id }));
    }

    return;
  }

  res.statusCode = 404;
  res.end("You lost, buddy? ;)");
};

const httpServer = createServer((req, res) => {
  const url = new URL(`http://${req.headers.host}${req.url}`);
  const method = req.method.toLowerCase();
  const decoder = new StringDecoder("utf-8");
  let buffer = "";

  req.on("data", function (data) {
    buffer += decoder.write(data);
  });

  req.on("end", function () {
    buffer += decoder.end();
    handler(url, method, buffer, res);
  });
});

httpServer.listen(3001, () => console.log("Server is started on port 3001"));