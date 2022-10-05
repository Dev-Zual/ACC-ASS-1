const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(port, () => {
  console.log("server running at", port);
});
