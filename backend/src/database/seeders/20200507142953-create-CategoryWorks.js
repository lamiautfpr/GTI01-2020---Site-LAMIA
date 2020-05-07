module.exports = {
    up: QueryInterface => {
        return QueryInterface.bulkInsert(
            'area_expertises',
            [
                {
                    name: 'Produto',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    name: 'Projeto',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    name: 'Publicação',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {}
        );
    },

    down: () => {},
};
