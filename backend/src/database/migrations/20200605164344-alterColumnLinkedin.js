module.exports = {
  up: queryInterface => {
    return queryInterface.renameColumn('members', 'likendin', 'linkedin');
  },

  down: queryInterface => {
    return queryInterface.renameColumn('members', 'linkedin', 'likendin');
  },
};
