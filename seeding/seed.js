/* eslint-disable no-console */
const seedSongs = require('./helpers/seedSongs');
const seedUsers = require('./helpers/seedUsers');
const seedPlaylists = require('./helpers/seedPlaylists');
const seedAlbums = require('./helpers/seedAlbums');
const seedSongsToSongs = require('./helpers/seedSongsToSongs');

const orderOfMagnitude = 10;

(async () => {
  console.log(`Generated ${orderOfMagnitude * 1000} Primary Records`);
  console.time('seedSongs');
  await seedSongs(`${__dirname}/csv/songs.csv`, orderOfMagnitude);
  console.timeEnd('seedSongs');

  console.time('seedUsers');
  await seedUsers(`${__dirname}/csv/users.csv`, orderOfMagnitude);
  console.timeEnd('seedUsers');

  console.time('relationshipSongsToSongs');
  await seedSongsToSongs(`${__dirname}/csv/songsToSongs.csv`, orderOfMagnitude);
  console.timeEnd('relationshipSongsToSongs');

  console.time('seedPlaylists');
  await seedPlaylists(`${__dirname}/csv/playlists.csv`, orderOfMagnitude);
  console.timeEnd('seedPlaylists');

  console.time('seedAlbums');
  await seedAlbums(`${__dirname}/csv/albums.csv`, orderOfMagnitude);
  console.timeEnd('seedAlbums');
})();
