import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let posts = {};

app.get("/posts", (_req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  } else if (type === "CommentCreated") {
    const { id, content, postId } = data;
    const post = posts[postId];
    post.comments.push({ id, content });
  } else {
    console.log("errorr");
  }
  console.log(posts);
  res.send({});
});

app.listen(4002, () => {
  console.log("query service listening on http://localhost:4002");
});
