module.exports = {
  dialect: 'postgres',
  host: '',
  username: '',
  password: '',
  database: '',
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
