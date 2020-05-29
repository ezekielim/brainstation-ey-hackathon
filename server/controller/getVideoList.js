const fs = require("fs");

const getYelpList = () => {
  const videoData = fs.readFileSync("./model/videos.json");

  const mappedYelpData = JSON.parse(yelpData).map((yelp) => {
    return {
      yelp: yelp,
      // id: video.id,
      // title: video.title,
      // channel: video.channel,
      // image: video.image,
      // comment: video.comment,
    };
  });

  return mappedYelpData;
};

module.exports = getYelpList;
