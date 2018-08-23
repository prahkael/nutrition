import express = require('express');
let app = express();

app.get('/', function (request, response) {
    response.send('Hello World 8000');
});

app.listen(3000);