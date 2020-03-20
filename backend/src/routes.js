import { Router } from 'express';

// import authMiddlewares from './app/middlewares/auth';
import TypeMemberController from './app/controllers/TypeMemberController';

const routes = new Router();

// routes.use(authMiddlewares);

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello Word!' });
});

routes.post('/type-members', TypeMemberController.store);
routes.get('/type-members', TypeMemberController.index);
routes.put('/type-members', TypeMemberController.update);
routes.delete('/type-members', TypeMemberController.delete);

export default routes;
