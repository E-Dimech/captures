import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

// remeber to place cors above any routes you dummy!!!!!
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// every route in posts will start with the path /posts
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Hello to Captures API");
});

// const CONNECTION_URL =
//   "mongodb+srv://edimech:$K8ter905@cluster0.ci3nu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Our app is running on port ${PORT}`);
// });

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);

// https://www.mongodb.com/cloud/atlas
