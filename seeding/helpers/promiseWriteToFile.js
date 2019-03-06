const fs = require('fs');

module.exports = (filePath, writeData, index) => new Promise((resolve, reject) => {
  const file = fs.createWriteStream(filePath, {
    flags: index === 0 ? 'w' : 'a',
  });
  for (let i = 0; i < writeData.length; i += 1) {
    file.write(`${writeData[i]}\n`);
  }
  file.end();
  file.on('finish', resolve);
  file.on('error', reject);
});
