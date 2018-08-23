"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (request, response) {
    response.send('Hello World 8000');
});
app.listen(3000);
//# sourceMappingURL=index.js.map