const { postAddressCharacter, getUser } = require("../database/database");

module.exports.setPosts = async (req: any, res: any) => {
  if (!req.body.message) {
    res.status(400).json({ message: "Add a body" });
  }

  console.log(req.body);

  // await postAddressCharacter(req.body.address, req.body.specs)

  //Post message
};

module.exports.getCharacter = async (req: any, res: any) => {
  const address = req.params.address;

  const data = await getUser(address);

  if (data) res.status(200).json({ data });
  else res.status(400);
};
