const ex = require("express");
const router = ex.Router();
const { setPosts } = require("../controllers/post.controllers");

router.get("/", (req: any, res: any) => {
  const address = req.query.address;
  res.json({ work: "work" });
});

router.post("/", setPosts);

router.put("/:id", (req: any, res: any) => {
  res.json({ id: req.params.id });
});

router.delete("/:id", (req: any, res: any) => {
  res.json({ message: "Post Deleted" + req.params.id });
});

// router.patch("/change/:id", (req: any, res: any) => {
//   res.json({ message: "Post Deleted" + req.params.id });
// });

module.exports = router;
