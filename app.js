const os         = require('os');
const bodyParser = require('body-parser');
const useragent  = require('useragent');
const express    = require('express');
const app        = express();

app.use(bodyParser.json());
app.set('trust proxy', true);

app.get("/", (req,res) => {
    res.json({ipaddress: req.ip, language: req.headers["accept-language"].substring(0,5), OS: useragent.parse(req.headers['user-agent']).source.match(/\(([^)]+)\)/)[1]});
});

app.listen(3000, () => {
    console.log("listening on 3000");
});