const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

const songRoutes = require('./app/controllers/songs');

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '/dist')));

app.use('/api/songs', songRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
