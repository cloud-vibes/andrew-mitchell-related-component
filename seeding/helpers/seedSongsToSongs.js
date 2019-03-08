const writeToFile = require('./promiseWriteToFile');

module.exports = (filePath, OoM) => new Promise(async (resolve, reject) => {
  try {
    const songToSong = {
      songId: 1,
      relatedSongId: 1,
    };
    for (let i = 0; i < OoM * 10; i += 1) {
      let batch = [];
      if (i === 0) {
        batch.push(`${Object.keys(songToSong).join(',')}`);
      }
      for (let c = 0; c < 100; c += 1) {
        for (let b = 0; b < 3; b += 1) {
          if (songToSong.songId === songToSong.relatedSongId) {
            if (songToSong.relatedSongId >= (OoM * 1000)) {
              songToSong.relatedSongId = 1;
            } else {
              songToSong.relatedSongId += 1;
            }
          }
          batch.push([
            `${songToSong.songId}`,
            `${songToSong.relatedSongId}`,
          ].join(','));
          if (songToSong.relatedSongId >= (OoM * 1000)) songToSong.relatedSongId = 1;
          songToSong.relatedSongId += 1;
        }
        songToSong.songId += 1;
      }
      // eslint-disable-next-line no-await-in-loop
      await writeToFile(filePath, batch, i);
      batch = [];
    }
    resolve();
  } catch (error) {
    reject(error);
  }
});
