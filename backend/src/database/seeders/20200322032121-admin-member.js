const bcrypt = require('bcryptjs');

module.exports = {
    up: QueryInterface => {
        return QueryInterface.bulkInsert(
            'members',
            [
                {
                    name: 'Support - Brainiac',
                    email: 'support@lamia.utpr.sh.edu.br',
                    password_hash: bcrypt.hashSync('Brainiac', 8),
                    office_id: 1,
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {}
        );
    },

    down: () => {},
};
