const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '.env') });

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci',
    },
  },
};
