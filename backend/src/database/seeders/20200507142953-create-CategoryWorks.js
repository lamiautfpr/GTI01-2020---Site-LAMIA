module.exports = {
    up: QueryInterface => {
        return QueryInterface.bulkInsert(
            'category_works',
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
