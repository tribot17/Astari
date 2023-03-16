const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded());

app.use("/send_character", require("./routes/post.routes"));

// app.get("/", (req: any, res: any) => {
//   res.json({ message: "You have get" });
// });

// app.post("/send_character", async (req: any, res: any) => {
//   const address = req.query.address;
// });

const server = app.listen(PORT, () => {});
