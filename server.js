const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", async (req, res) => {
  const { q = "" } = req.query;
  const response = await fetch(
    `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${q}`
  );
  const result = await response.json();
  res.status(200).json({ message: "success", data: result });
});

app.listen(8000, () => {
  console.log("listening to port 8000");
});
