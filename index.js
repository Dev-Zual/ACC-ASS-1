const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const userRoutes = require("./routes/v1/user.route");

// middleware
app.use(express.json());

// all routes
app.use("/api/v1/user", userRoutes);

app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(port, () => {
  console.log("server running at", port);
});
