module.exports = {
    up: QueryInterface => {
        return QueryInterface.bulkInsert(
            'type-works',
            [
                {
                    name: 'Pesquisa',
                    created_at: new Date(),
                    updated_at: new Date(),
                    category_id: 1,
                },
                {
                    name: 'Pós Graduação',
                    created_at: new Date(),
                    updated_at: new Date(),
                    category_id: 1,
                },
                {
                    name: 'Inciação',
                    created_at: new Date(),
                    updated_at: new Date(),
                    category_id: 1,
                },
                {
                    name: 'Extesão',
                    created_at: new Date(),
                    updated_at: new Date(),
                    category_id: 1,
                },
                {
                    name: 'Livro',
                    created_at: new Date(),
                    updated_at: new Date(),
                    category_id: 2,
                },
                {
                    name: 'Partes de Livro',
                    created_at: new Date(),
                    updated_at: new Date(),
                    category_id: 2,
                },
                {
                    name: 'Periódico',
                    created_at: new Date(),
                    updated_at: new Date(),
                    category_id: 2,
                },
                {
                    name: 'Conferência',
                    created_at: new Date(),
                    updated_at: new Date(),
                    category_id: 2,
                },
                {
                    name: 'Congresso',
                    created_at: new Date(),
                    updated_at: new Date(),
                    category_id: 2,
                },
                {
                    name: 'Relatório',
                    created_at: new Date(),
                    updated_at: new Date(),
                    category_id: 2,
                },
                {
                    name: 'TCC',
                    created_at: new Date(),
                    updated_at: new Date(),
                    category_id: 2,
                },
                {
                    name: 'Tese',
                    created_at: new Date(),
                    updated_at: new Date(),
                    category_id: 2,
                },
                {
                    name: 'Dissertação',
                    created_at: new Date(),
                    updated_at: new Date(),
                    category_id: 2,
                },
                {
                    name: 'Patente',
                    created_at: new Date(),
                    updated_at: new Date(),
                    category_id: 3,
                },
                {
                    name: 'Software',
                    created_at: new Date(),
                    updated_at: new Date(),
                    category_id: 3,
                },
                {
                    name: 'Consutoria',
                    created_at: new Date(),
                    updated_at: new Date(),
                    category_id: 3,
                },
                {
                    name: 'Material',
                    created_at: new Date(),
                    updated_at: new Date(),
                    category_id: 3,
                },
            ],
            {}
        );
    },

    down: () => {},
};
