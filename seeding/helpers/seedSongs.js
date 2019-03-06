const faker = require('faker');

const writeToFile = require('./promiseWriteToFile');

module.exports = (filePath, OoM) => new Promise(async (resolve, reject) => {
  try {
    const song = {
      id: 1,
      name: 'Song',
      description: 'Song Description',
      plays: 1,
      genre: 'Song Genre',
      length: `${3}:${20}`,
      image: 'https://example.com/',
      userId: 1,
      playlistId: 1,
      albumId: 1,
    };
    for (let i = 0; i < OoM; i += 1) {
      let batch = [];
      if (i === 0) {
        batch.push(`${Object.keys(song).join(',')}`);
      }
      for (let b = 0; b < 100; b += 1) {
        for (let c = 0; c < 10; c += 1) {
          batch.push([
            `${song.id}`,
            `${song.name} ${song.id}`,
            `${faker.lorem.paragraph()}`,
            `${faker.random.number(100000)}`,
            `${song.genre} ${b}`,
            `${faker.random.number(4)}:${faker.random.number(59)}`,
            `https://s3.us-east-2.amazonaws.com/product-summary-component/sdc/${b + 1}example.jpg`,
            `${song.userId}`,
            `${song.playlistId}`,
            `${song.albumId}`,
          ].join(','));
          song.id += 1;
        }
        song.userId += 1;
        song.playlistId += 1;
        song.albumId += 1;
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
