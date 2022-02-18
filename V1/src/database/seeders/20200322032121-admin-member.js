const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'members',
      [
        {
          name: 'Support Brainiac',
          email: 'support@lamia.utpr.sh.edu.br',
          login: 'Brainiac',
          password_hash: bcrypt.hashSync('Brainiac', 8),
          description:
            'Sou um ciborgue ou androide extraterrestre. Meu principal inimigo é Superman, e sou responsável por encolher e roubar a Kandor, a capital do planeta natal de Superman, Krypton.',
          office_id: 1,
          avatar_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
