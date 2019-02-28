const express = require('express');

const router = express.Router();

const db = require('../models/crud');

const table = 'songs';

router.get('', async (req, res) => {
  const results = await db.getAll(table);
  res.send(results);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const results = await db.getOne(table, id);
  res.send(results);
});

router.post('', async (req, res) => {
  const results = await db.create(table, req.body.data);
  res.send(results);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const results = await db.update(table, id, req.body.data);
  res.send(results);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const results = await db.delete(table, id);
  res.send(results);
});

module.exports = router;
