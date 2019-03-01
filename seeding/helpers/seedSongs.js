const writeToFile = require('./promiseWriteToFile');

module.exports = filePath => new Promise(async (resolve, reject) => {
  try {
    const song = {
      id: 1,
      name: 'Song',
      description: 'Song Description',
      plays: 1,
      genre: 'Song Genre',
      length: `${3}:${20}`,
    };
    for (let i = 0; i < 1; i += 1) {
      let batch = [];
      if (i === 0) {
        batch.push(`${Object.keys(song).join(',')}\n`);
      }
      for (let b = 0; b < 1000; b += 1) {
        batch.push([
          `${song.id + b}`,
          `${song.name} ${song.id + b}`,
          `${song.description} ${song.id + 1}`,
          `${1000 + (song.id % 3) * 2000}`,
          `${song.genre} ${song.id + b}`,
          `${song.id % 3}:${20}`,
        ].join(','));
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
