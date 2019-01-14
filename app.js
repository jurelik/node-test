var express = require('express');
var app = express()
var youtubeStream = require('youtube-audio-stream');

app.use(express.static('public'));

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/stream/:videoId', function(req, res) {
  youtubeStream(req.params.videoId).pipe(res);
});

app.get('/sup', function(req, res) {
  res.send('yoooo');
});

app.listen(3000, () => {
  console.log('listening');
});