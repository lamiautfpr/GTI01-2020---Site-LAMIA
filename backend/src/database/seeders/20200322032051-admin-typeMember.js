module.exports = {
    up: QueryInterface => {
        return QueryInterface.bulkInsert(
            'type_members',
            [
                {
                    name: 'administrator',
                    description:
                        'Standard user for new tests and implementation, has full access to the system.',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    name: 'Orientador',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    name: 'Membro',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    name: 'Novato',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {}
        );
    },

    down: () => {},
};
