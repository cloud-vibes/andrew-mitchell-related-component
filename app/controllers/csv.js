const express = require('express');

const router = express.Router();

router.get('/users', (req, res) => {
  const file = `${__dirname}../../../seeding/csv/users.csv`;
  res.download(file); // Set disposition and send it.
});

router.get('/playlists', (req, res) => {
  const file = `${__dirname}../../../seeding/csv/playlists.csv`;
  res.download(file); // Set disposition and send it.
});

router.get('/songsToSongs', (req, res) => {
  const file = `${__dirname}../../../seeding/csv/songToSongs.csv`;
  res.download(file); // Set disposition and send it.
});

router.get('/songs', (req, res) => {
  const file = `${__dirname}../../../seeding/csv/songs.csv`;
  res.download(file); // Set disposition and send it.
});

router.get('/albums', (req, res) => {
  const file = `${__dirname}../../../seeding/csv/albums.csv`;
  res.download(file); // Set disposition and send it.
});

module.exports = router;
