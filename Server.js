const express = require("express");
const app = express();

const postRoutes = require("./routes/postRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Blog API Running...");
});

app.use("/posts", postRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});