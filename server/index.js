const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');

const fetch = require("node-fetch");

const PORT = process.env.PORT || 3001;
const app = express();

const options = {
    target: 'https://www.mobile.de',
    changeOrigin: true,
};

const exampleProxy = createProxyMiddleware(options);

app.use('/hiring-challenge.json', exampleProxy);

app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});