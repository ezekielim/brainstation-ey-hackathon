const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const getVideoList = require("./controller/getVideoList");
const getVideo = require("./controller/getVideo");
app.use(express.json());
app.use(cors());

app
  .route("/videos")
  .get((req, res) => {
    res.json(getVideoList());
  })
  .post((req, res) => {
    const vidFile = JSON.parse(fs.readFileSync("./model/videos.json"));
    vidFile.push(req.body);
    fs.writeFileSync("./model/videos.json", JSON.stringify(vidFile));
    res.redirect("/videos");
  });

app.get("/videos/:id", (req, res) => {
  const Id = req.params.id;
  res.json(getVideo(Id));
});

app.get("/*", (req, res) => {
  res.send(`<p>Wrong Page</p>`);
});

app.listen(5000);