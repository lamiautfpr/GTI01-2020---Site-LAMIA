module.exports = {
  up: queryInterface => {
    return queryInterface.renameColumn(
      'members_works',
      'scholarship',
      'responsibility'
    );
  },

  down: queryInterface => {
    return queryInterface.renameColumn(
      'members_works',
      'responsibility',
      'scholarship'
    );
  },
};
