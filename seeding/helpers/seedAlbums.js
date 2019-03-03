const faker = require('faker');

const writeToFile = require('./promiseWriteToFile');

module.exports = (filePath, OoM) => new Promise(async (resolve, reject) => {
  try {
    const album = {
      id: 1,
      name: '',
      image: 'https://example.com/',
    };
    for (let i = 0; i < OoM / 10; i += 1) {
      let batch = [];
      if (i === 0) {
        batch.push(`${Object.keys(album).join(',')}`);
      }
      for (let b = 0; b < 1000; b += 1) {
        batch.push([
          `${album.id}`,
          `${faker.name.firstName()}'s Album`,
          `https://s3.us-east-2.amazonaws.com/product-summary-component/sdc/${b + 1}example.jpg`,
        ].join(','));
        album.id += 1;
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
