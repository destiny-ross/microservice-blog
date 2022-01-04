import { randomBytes } from "crypto";

import express from "express";
import cors from "cors";
import morgan from "morgan";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors({}));
let posts = {};

app.post("/posts/create", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  await axios.post("http://event-bus-serv:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });

  res.status(201).send(posts[id]);
});

app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);

  res.send({});
});

app.listen(4000, () => {
  console.log("Post service listening on port 4000");
});
