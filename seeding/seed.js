const seedSongs = require('./helpers/seedSongs');
const seedUsers = require('./helpers/seedUsers');
const seedPlaylists = require('./helpers/seedPlaylists');
const seedAlbums = require('./helpers/seedAlbums');

const OoM = 10;

(async () => {
  console.time('seedSongs');
  await seedSongs(`${__dirname}/csv/songs.csv`, OoM);
  console.timeEnd('seedSongs');

  console.time('seedUsers');
  await seedUsers(`${__dirname}/csv/users.csv`, OoM);
  console.timeEnd('seedUsers');

  console.time('seedPlaylists');
  await seedPlaylists(`${__dirname}/csv/playlists.csv`, OoM);
  console.timeEnd('seedPlaylists');

  console.time('seedAlbums');
  await seedAlbums(`${__dirname}/csv/albums.csv`, OoM);
  console.timeEnd('seedAlbums');
})();
