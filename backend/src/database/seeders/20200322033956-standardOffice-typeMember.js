module.exports = {
    up: QueryInterface => {
        return QueryInterface.bulkInsert(
            'type_members',
            [
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
