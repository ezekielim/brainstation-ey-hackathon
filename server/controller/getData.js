const fs = require("fs");

const getData = (id) => {
  const yelpData = fs.readFileSync("./model/yelp.json");

  const filteredyelpData = JSON.parse(yelpData).filter(
    (data) => data.id === id
  );
  return filteredyelpData;
};

module.exports = getData;
