import { Router } from 'express';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';
import StudentsController from './app/controllers/StudentsController';

const routes = new Router();

// routes.post('/users', UserController.store);
routes.post('/login', SessionController.login);

routes.use(authMiddleware);

routes.post('/InsertStudent', StudentsController.insert);

// routes.put('/users', UserController.update);

export default routes;
