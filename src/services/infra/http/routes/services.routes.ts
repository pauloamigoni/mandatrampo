import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ServiceController from '../controllers/ServiceController';

const servicesRouter = Router();
const serviceController = new ServiceController();

servicesRouter.use(ensureAuthenticated);

servicesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      user_id: Joi.string().uuid().required(),
      curriculum: Joi.string(),
      name: Joi.string(),
      description: Joi.string(),
      address: Joi.string(),
      city: Joi.string(),
      phone: Joi.string(),
      celphone: Joi.string(),
      email: Joi.string(),
      site: Joi.string(),
      link_facebook: Joi.string(),
      link_instagram: Joi.string(),
      opening_hours: Joi.string(),
      categories_id: Joi.string().uuid(),
      categories_others: Joi.string(),
    },
  }),
  serviceController.create,
);

export default servicesRouter;
