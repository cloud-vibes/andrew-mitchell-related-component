const faker = require('faker');

const writeToFile = require('./promiseWriteToFile');

module.exports = (filePath, OoM) => new Promise(async (resolve, reject) => {
  try {
    const playlist = {
      id: 1,
      name: '',
      image: 'https://example.com/',
    };
    for (let i = 0; i < OoM / 100; i += 1) {
      let batch = [];
      if (i === 0) {
        batch.push(`${Object.keys(playlist).join(',')}`);
      }
      for (let b = 0; b < 1000; b += 1) {
        batch.push([
          `${playlist.id}`,
          `${faker.name.firstName()}'s Playlist`,
          `https://s3.us-east-2.amazonaws.com/product-summary-component/sdc/${b + 1}example.jpg`,
        ].join(','));
        playlist.id += 1;
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
