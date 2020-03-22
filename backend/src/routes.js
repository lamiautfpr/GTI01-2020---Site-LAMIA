import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddlewares from './app/middlewares/auth';
import SessionController from './app/controllers/SessionController';
import TypeMemberController from './app/controllers/TypeMemberController';
import FileController from './app/controllers/FileController';
import MemberController from './app/controllers/MemberController';
import OfficeController from './app/controllers/OfficeController';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/', (req, res) => {
    return res.json({ msessage: 'Hello Word!' });
});

routes.get('/type-members', TypeMemberController.index);
routes.get('/members', MemberController.index);
routes.get('/members/:office', OfficeController.index);

routes.post('/sessions', SessionController.store);

routes.use(authMiddlewares);

routes.post('/type-members', TypeMemberController.store);

routes.put('/type-members', TypeMemberController.update);
routes.delete('/type-members', TypeMemberController.delete);

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/members', MemberController.store);
routes.put('/members', MemberController.update);

export default routes;
