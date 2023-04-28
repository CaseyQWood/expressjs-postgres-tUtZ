import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";
import { chatApi } from "./chatApi.js";

// Connect to the database using the DATABASE_URL environment
//   variable injected by Railway
const pool = new pg.Pool();

dotenv.config();
const app = express();
const port = process.env.PORT || 3333;
const host = process.env.HOST || "0.0.0.0";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  console.log("Hello, World! The time from the DB is")
  res.send(`Hello, World! The time from the DB`);
  chatApi();
});

app.listen(port,  () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
