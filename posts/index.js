import { randomBytes } from "crypto";

import express from "express";
import cors from "cors";
import morgan from "morgan";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors({}));
let posts = new Object();

app.get("/posts", (_req, res) => {
  console.log("GET /posts hit");
  return res.status(200).send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");

  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };

  console.dir(posts);
  res.status(201).send(posts);
});

app.listen(4000, () => {
  console.log("Listening on http://localhost:4000");
});
