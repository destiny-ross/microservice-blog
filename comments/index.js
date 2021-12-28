import { randomBytes } from "crypto";

import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(cors());

let commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  const { id } = req.params;
  console.log(`GET /posts/${id}/comments hit`);

  return res.status(200).send(commentsByPostId[id]);
});

app.post("/posts/:id/comments", (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  console.log(`POST /posts/${id}/comments hit`);

  const commentId = randomBytes(4).toString("hex");
  let comments = commentsByPostId[id] || [];

  comments.push({ id: commentId, content });
  commentsByPostId[req.params.id] = comments;

  res.status(201).send(commentsByPostId);
});

app.listen(4001, () => {
  console.log("Listening on http://localhost:4001");
});
