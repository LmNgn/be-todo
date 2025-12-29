import express from "express";
import router from "./src/routes/index.js";
import connectDB from "./src/configs/connectDB.js";
import notFoundRequest from "./src/middlewares/notFoundRequest.js";
import { HOST, PORT } from "./src/configs/dotenvConfig.js";
import cors from "cors"
const app = express();
app.use(express.json());
app.use(cors())
app.get("/", (req, res) => {
  res.send("Server test OK ✅");
});
connectDB();

app.use("/", router);

// * handle Notfound Request
app.use(notFoundRequest);

app.listen(PORT, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});
