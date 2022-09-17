const express = require("express");
const app = express();
const PORT = process.env.PORT || 300;

app.use(express.urlencoded({ extended: true }));

app.get("/tacos", (req, res) => {
  console.log(req.query);
  res.send("/tacos");
});
app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`${meat}: ${qty}`);
});

app.listen(PORT, () => {
  console.log("port 3000");
});
