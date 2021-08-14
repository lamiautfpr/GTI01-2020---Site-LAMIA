import { Router } from 'express';
import multer from 'multer';
import AreaExpertiseController from './app/controllers/AreaExpertiseController';
import CategoryWorkController from './app/controllers/CategoryWorkController';
import FileController from './app/controllers/FileController';
import LastWorkController from './app/controllers/LastWorkController';
import ListController from './app/controllers/ListController';
import MemberAvatarController from './app/controllers/MemberAvatarController';
import MemberController from './app/controllers/MemberController';
import MemberOfficeController from './app/controllers/MemberOfficeController';
import NewsController from './app/controllers/NewsController';
import OfficeController from './app/controllers/OfficeController';
import PartnerController from './app/controllers/PartnerController';
import SessionController from './app/controllers/SessionController';
import StatisticController from './app/controllers/StatisticController';
import TypeMemberController from './app/controllers/TypeMemberController';
import TypeWorkController from './app/controllers/TypeWorkController';
import WorkController from './app/controllers/WorkController';
import authMiddlewares from './app/middlewares/auth';
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello Word!' });
});

routes.get('/type-members', TypeMemberController.index);
routes.get('/members', MemberController.index);
routes.get('/members/:office', OfficeController.index);
routes.get('/area-expertises', AreaExpertiseController.index);
routes.get('/category-works', CategoryWorkController.index);
routes.get('/type-works', TypeWorkController.index);
routes.get('/partners', PartnerController.index);
routes.get('/works', WorkController.index);
routes.get('/statistics', StatisticController.index);
routes.get('/last-work', LastWorkController.index);
routes.get('/news', NewsController.index);

routes.get('/news/:id', NewsController.show);
routes.get('/category-works/:category', ListController.show);
routes.get('/:login', MemberController.show);
routes.get('/work/:id', WorkController.show);

routes.post('/sessions', SessionController.store);

routes.use(authMiddlewares);

routes.post('/type-members', TypeMemberController.store);
routes.post('/area-expertises', AreaExpertiseController.store);
routes.post('/category-work', CategoryWorkController.store);
routes.post('/type-work', TypeWorkController.store);
routes.post('/works', WorkController.store);
routes.post('/files', upload.single('file'), FileController.store);
routes.post('/members', MemberController.store);

routes.put('/type-members', TypeMemberController.update);
routes.put('/area-expertises', AreaExpertiseController.update);
routes.put('/category-work', CategoryWorkController.update);
routes.put('/type-work', TypeWorkController.update);
routes.put('/members', MemberController.update);
routes.patch(
  '/members/ ',
  upload.single('avatar'),
  MemberAvatarController.update
);
routes.patch('/members/office', MemberOfficeController.update);

routes.delete('/type-members', TypeMemberController.delete);
routes.delete('/area-expertises', AreaExpertiseController.delete);
routes.delete('/category-work', CategoryWorkController.delete);
routes.delete('/type-work', TypeWorkController.delete);

export default routes;
