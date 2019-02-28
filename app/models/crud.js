const db = require('../helpers/db');

module.exports = {
  getAll: async (table) => {
    const query = `SELECT * FROM ${table}`;
    const results = await db.query(query);
    return results;
  },
  getOne: async (table, id) => {
    const query = `
      SELECT * FROM ${table} 
      WHERE ${table}.id = ${db.escape(id)}
    `;
    const results = await db.query(query);
    return results;
  },
  create: async (table, data) => {
    const keys = Object.keys(data);
    const values = keys.map(value => db.escape(data[value]));
    const query = `
      INSERT ${table} (${keys.join(',')})
      VALUES (${values.join(',')})
    `;
    const results = await db.query(query);
    return results;
  },
  update: async (table, id, data) => {
    const keys = Object.keys(data);
    let setStr = '';
    for (let i = 0; i < keys.length; i += 1) {
      let newStr = `${keys[i]} = ${db.escape(data[keys[i]])}`;
      if (i !== keys.length - 1) {
        newStr = `${newStr},`;
      }
      setStr = `${setStr} ${newStr}`;
    }
    const query = `
      INSERT ${table} 
      SET ${setStr} 
      WHERE ${table}.id = ${db.escape(id)}
    `;
    const results = await db.query(query);
    return results;
  },
  delete: async (table, id) => {
    const query = `
      DELETE ${table}
      WHERE ${table}.id = ${db.escape(id)}
    `;
    const results = await db.query(query);
    return results;
  },
};
