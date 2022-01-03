import express from "express";
import cors from "cors";
import axios from "axios";
import morgan from "morgan";

const app = express();
app.use(cors());
// app.use(morgan("tiny"));
app.use(express.json());

let events = [];

app.post("/events", (req, res) => {
  const event = req.body;
  events.push(event);

  axios.post("http://posts-clusterip-serv:4000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://comments-serv:4001/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://query-serv:4002/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://moderation-serv:4003/events", event).catch((err) => {
    console.log(err.message);
  });
  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Event Bus listening on 4005");
});
