const express = require("express");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());


app.use("/api/books", bookRoutes);


app.use(function (req, res) {
  res.status(404).json({ message: "Route not found" });
});


app.listen(PORT, function () {
  console.log("Server running at http://localhost:" + PORT);
});
