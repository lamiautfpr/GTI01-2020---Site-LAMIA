module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: 'db_developer',
  password: 'db_developerROOT',
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
