import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import CurriculumController from '../controllers/CurriculumController';

const curriculunsRouter = Router();
const curriculumController = new CurriculumController();

curriculunsRouter.use(ensureAuthenticated);

curriculunsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      user_id: Joi.string().uuid().required(),
      curriculum: Joi.string(),
      link_mediasocial: Joi.string(),
      description: Joi.string(),
      profession_id: Joi.string().required(),
      profession_others: Joi.string(),
      experience_time: Joi.string(),
    },
  }),
  curriculumController.create,
);

export default curriculunsRouter;
