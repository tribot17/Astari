const { postAddressCharacter, getUser } = require("../database/database");

module.exports.setPosts = async (req: any, res: any) => {
  if (!req.body.specs) res.status(400).json({ message: "Specs Error" });
  if (req.body.address.length !== 42)
    res.status(400).json({ message: "Address Error" });

  await postAddressCharacter(req.body.address, req.body.specs);

  res.status(200).json({ message: "character added" });
};

module.exports.getCharacter = async (req: any, res: any) => {
  const address = req.params.address;

  const data = await getUser(address);

  if (data) res.status(200).json({ user: data });
  else res.status(400);
};
