const express = require("express");
const app = express();

app.get("/", (req: any, res: any) => {
  res.send("Hello World");
});

const server = app.listen(8081, () => {});
