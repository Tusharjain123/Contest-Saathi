import express from "express";
import React from "react";
import fs from "fs"
import path from "path";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../App";

const app = express()

const context = {}

app.use(express.static(path.resolve("./build"), {index: false}));

app.get("*", (req, res) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('some error occured', err)
        }
        const html = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        )
        return res.send(data.replace('<div id="root"></div>', `<div id="root">${html}</div>`))
    })
})



app.listen(4000, () => {
    console.log("4000")
})