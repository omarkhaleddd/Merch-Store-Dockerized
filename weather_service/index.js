import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const apiPort = 5001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/", (req, res) => {
  res.send("Hello World! - from weather service");
});

app.get("/api/weather", (req, res) => {
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let currentdate = new Date();
  let datetime =
    "Last Sync: " +
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  let rndInt = randomIntFromInterval(20, 40);
  return res.status(200).json({
    success: true,
    value: `${rndInt} c, ${datetime}`,
  });
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
