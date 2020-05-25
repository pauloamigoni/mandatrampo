import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProfessionsController from '../controllers/ProfessionsController';

const professionsRouter = Router();
const professionsController = new ProfessionsController();

professionsRouter.post(
  '/',
  ensureAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  professionsController.create,
);

export default professionsRouter;
