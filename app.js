"use strict";
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

let messages = [];

app.use(bodyparser.json());

app.get("/messages", function (req, res) {
    res.set({userType: "messageSender"});
    res.json(messages);
});

app.post("/message", function (req, res) {
    if (!req.body || !req.body.id) {
        return res.status(400).send("Please post only messages with an ID");
    }
    let messageIdAlreadyExists = messages.some(function (message) {
        return message.id === req.body.id;
    });
    if (messageIdAlreadyExists) {
        return res.status(400).send("A message with this ID already exists");
    }
    messages.push(req.body);
    res.set({userType: "messageSender"});
    res.send(messages);
});

app.delete("/message", function (req, res) {
    let message = messages.find(function (message) {
        return message.id == req.query.messageId;
    });
    if (!message) {
        return res.status(400).send("This message does not exist");
    }
    let index = messages.indexOf(message);
    messages.splice(index, 1);
    res.send(messages);
});

module.exports = app;