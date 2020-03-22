import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

// import authMiddlewares from './app/middlewares/auth';
import TypeMemberController from './app/controllers/TypeMemberController';
import FileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);

// routes.use(authMiddlewares);

routes.get('/', (req, res) => {
    return res.json({ msessage: 'Hello Word!' });
});

routes.post('/type-members', TypeMemberController.store);
routes.get('/type-members', TypeMemberController.index);
routes.put('/type-members', TypeMemberController.update);
routes.delete('/type-members', TypeMemberController.delete);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
