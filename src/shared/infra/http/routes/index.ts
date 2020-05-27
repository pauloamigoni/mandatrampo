import { Router } from 'express';

import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import providersRouter from '@modules/appointments/infra/http/routes/providers.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import curriculumRouter from '@modules/curriculuns/infra/http/routes/curriculuns.routes';
import serviceRouter from '@modules/services/infra/http/routes/services.routes';
import professionRouter from '@modules/professions/infra/http/routes/professions.routes';
import categorieRouter from '@modules/categories/infra/http/routes/categories.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/providers', providersRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/curriculum', curriculumRouter);
routes.use('/services', serviceRouter);
routes.use('/profession', professionRouter);
routes.use('/categorie', categorieRouter);

export default routes;
