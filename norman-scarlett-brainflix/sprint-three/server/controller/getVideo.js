const fs = require("fs");

const getVideo = (id) => {
  const videoFile = fs.readFileSync("./model/videos.json");
  const filteredVideoFile = JSON.parse(videoFile).filter((video) => video.id === id).shift();
  return filteredVideoFile;
};

module.exports = getVideo;

