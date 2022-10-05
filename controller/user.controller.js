const path = require("path");
const fs = require("fs");

data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data.json")).toString()
);

module.exports.getAllUsers = (req, res) => {
  res.send(data);
};
module.exports.getRandomUser = (req, res) => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  const randomUser = data.filter((user) => user.id === randomNumber);

  res.send(randomUser);
};

module.exports.saveAUser = (req, res) => {
  // const newUser = req.body;
  data.push(req.body);
  res.send(data);
};

module.exports.updateUser = (req, res) => {
  const { id } = req.params;
  const findUser = data.map((user) => user.id == id);

  findUser.id = req.body.id;
  findUser.name = req.body.name;
  findUser.gender = req.body.gender;
  res.send(findUser);
};

module.exports.deleteUser = (req, res) => {
  const { id } = req.params;

  data = data.filter((user) => user.id !== Number(id));
  res.send(data);
};
