const express = require('express');
const cors = require('cors');

const getVideo = require('./controller/getVideo');
const getVideoList = require('./controller/getVideoList');

const app = express();

// middleware make sure incoming req.body is formatted as JSON
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello from express');
});

// app.post('/', (req, res) => {
//   res.send('posted to express');
// });

// chaining routes
app
  .route('/videos')
  .get((req, res) => {
    res.json(getVideoList());
  })
  .post((req, res) => {
    videoData.push(req.body);
    res.json(videoData);
  })
  .put((req, res) => {
    res.send('Video updated');
  });

// dynamic path using an id as a param
app.get('/videos/:id', (req, res) => {
  const vidId = req.params.id;
  res.json(getVideo(vidId));
});

app.get('/*', (req, res) => {
  res.send(
    `<h1>Page not found</h1>
    <img src="https://i.pinimg.com/originals/71/07/40/7107408a37d845fb7b008837eb524853.jpg"/>`
  );
});

app.listen(5000, console.log('app is listening at: http://localhost:5000'));
