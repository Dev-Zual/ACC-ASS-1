const path = require("path");
const fs = require("fs");

data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data.json")).toString()
);

module.exports.getAllUsers = (req, res) => {
  res.send(data);
};
