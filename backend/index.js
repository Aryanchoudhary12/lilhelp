import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/route.js";
import { connectDB } from "./db/db.js";
import path from "path";
dotenv.config();
const __dirname = path.resolve();
const app = express();
const Port = process.env.PORT || 4000;
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use("/api", routes);
app.use("/", (req, res) => {
  res.send("hello world");
});
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frondend","dist","index.html"));
  })
}
app.listen(Port, () => {
  console.log(`server is running on http://localhost:${Port}`);
  connectDB();
});
