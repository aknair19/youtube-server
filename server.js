const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const API = process.env.API_SEARCH;
const LOCAL_API = process.env.LOCAL_API;
app.use(
  cors({
    origin: LOCAL_API,
  })
);

app.get("/", async (req, res) => {
  try {
    const { q = "" } = req.query;
    const response = await fetch(`${process.env.API_SEARCH}${q}`);
    const result = await response.json();
    res.status(200).json({ message: "success", data: result });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
