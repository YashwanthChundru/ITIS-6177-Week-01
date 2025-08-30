const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello World");
});

const port = 8080;
app.listen(port, ()=>{
    console.log(`Express server listening at http://localhost:${port}`);
});