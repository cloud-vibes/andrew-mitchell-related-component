const seedSongs = require('./helpers/seedSongs');

(async () => {
  // const startTime = Date.now();
  console.time('seedSongs');
  await seedSongs(`${__dirname}/csv/songs.csv`);
  console.timeEnd('seedSongs');
  // console.log(`Finished ${(Date.now() - startTime) / 100}`);
})();
