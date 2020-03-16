import { Router } from 'express';

// import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

// routes.use(authMiddlewares);

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello Word!' });
});

export default routes;
