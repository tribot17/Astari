const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors({ origin: "http://127.0.0.1:5173" }));

app.use("/send_character", require("./routes/post.routes"));

const server = app.listen(PORT, () => {});
