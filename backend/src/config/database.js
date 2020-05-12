module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'rafaeldev',
  password: 'devroot',
  database: 'lamia',
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
