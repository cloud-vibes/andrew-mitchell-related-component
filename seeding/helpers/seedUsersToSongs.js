const writeToFile = require('./promiseWriteToFile');

module.exports = (filePath, OoM) => new Promise(async (resolve, reject) => {
  try {
    const userToSong = {
      songId: 1,
      userId: 1,
    };
    for (let i = 0; i < OoM * 100; i += 1) {
      let batch = [];
      if (i === 0) {
        batch.push(`${Object.keys(userToSong).join(',')}`);
      }
      for (let b = 0; b < 10; b += 1) {
        batch.push([
          `${userToSong.songId}`,
          `${userToSong.userId}`,
        ].join(','));
        userToSong.songId += 1;
      }
      userToSong.userId += 1;
      // eslint-disable-next-line no-await-in-loop
      await writeToFile(filePath, batch, i);
      batch = [];
    }
    resolve();
  } catch (error) {
    reject(error);
  }
});
