const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/send_character", require("./routes/post.routes"));

const server = app.listen(PORT, () => {});
