const fs = require("fs");

const getVideoList = () => {
  const videoFile = JSON.parse(fs.readFileSync("./model/videos.json"));
  return videoFile;
};

module.exports = getVideoList;