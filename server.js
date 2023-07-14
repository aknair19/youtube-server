import express from "express";
import cors from "cors";
import fetch from "node-fetch";

import { config } from "dotenv";
config();

const app = express();
const PORT = process.env.PORT;
const API = process.env.API_SEARCH;
const LOCAL_API = process.env.LOCAL_API;
const PUBLIC_API = process.env.PUBLIC_API;
app.use(
  cors({
    origin: PUBLIC_API,
  })
);

app.get("/", async (req, res) => {
  try {
    const { q = "" } = req.query;
    const response = await fetch(`${API}${q}`);
    const result = await response.json();
    res.status(200).json({ message: "success", data: result });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
