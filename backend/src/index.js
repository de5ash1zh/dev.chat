import express from "express";
const app = express();
import { PORT } from "./config/serverConfig.js"; 

app.get("/ping", (req, res) => {
  return res.status(200).json({ message: "pong" });
});

app.listen(PORT,()=>{
    console.log(`Server is running on the port ${PORT}`)
})