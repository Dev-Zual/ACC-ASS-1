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
