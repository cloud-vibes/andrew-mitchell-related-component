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
    };
    for (let i = 0; i < OoM; i += 1) {
      let batch = [];
      if (i === 0) {
        batch.push(`${Object.keys(song).join(',')}`);
      }
      for (let b = 0; b < 1000; b += 1) {
        batch.push([
          `${song.id}`,
          `${song.name} ${song.id}`,
          `${faker.lorem.paragraph()}`,
          `${faker.random.number(100000)}`,
          `${song.genre} ${b}`,
          `${faker.random.number(4)}:${faker.random.number(59)}`,
          `https://s3.us-east-2.amazonaws.com/product-summary-component/sdc/${b + 1}example.jpg`,
        ].join(','));
        song.id += 1;
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
