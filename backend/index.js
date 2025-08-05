import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/route.js";
import { connectDB } from "./db/db.js";
dotenv.config();
const app = express();
const Port = process.env.PORT || 4000;
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use("/api", routes);
app.use("/", (req, res) => {
  res.send("hello world");
});

app.listen(Port, () => {
  console.log(`server is running on http://localhost:${Port}`);
  connectDB();
});
