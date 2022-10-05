const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const userRoutes = require("./routes/v1/user.route");

// middleware
app.use(express.json());

// all routes
app.use("/api/v1/user", userRoutes);
// app.use("/api/v1/user/random", userRoutes);

app.get("/", (req, res) => {
  res.send("server running");
});

app.get("*", (req, res) => {
  res.send("No route found");
});

app.listen(port, () => {
  console.log("server running at", port);
});
