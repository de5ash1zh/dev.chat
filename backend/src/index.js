import express from "express";
const app = express();
import { StatusCodes } from "http-status-codes";
import { PORT } from "./config/serverConfig.js";

app.get("/ping", (req, res) => {
  return res.status(StatusCodes.OK).json({ message: "pong" });
});

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
