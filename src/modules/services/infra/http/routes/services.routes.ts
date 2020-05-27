import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ServiceController from '../controllers/ServiceController';

const servicesRouter = Router();
const serviceController = new ServiceController();

servicesRouter.use(ensureAuthenticated);

servicesRouter.post(
  '/',
  ensureAuthenticated,
  celebrate({
    [Segments.BODY]: {
      user_id: Joi.string().uuid().required(),
      curriculum: Joi.string().allow('').optional(),
      name: Joi.string().allow('').optional(),
      description: Joi.string().allow('').optional(),
      address: Joi.string().allow('').optional(),
      city: Joi.string()
        .required()
        .error(new Error('Obrigatório informar a Cidade')),
      phone: Joi.string().allow('').optional(),
      celphone: Joi.string().allow('').optional(),
      email: Joi.string().allow('').optional(),
      site: Joi.string().allow('').optional(),
      link_facebook: Joi.string().allow('').optional(),
      link_instagram: Joi.string().allow('').optional(),
      opening_hours: Joi.string().allow('').optional(),
      categories_id: Joi.string()
        .uuid()
        .required()
        .error(
          new Error(
            'Obrigatório informar uma Categoria, ID deve ser formato UUID',
          ),
        ),
      categories_others: Joi.string().allow('').optional(),
    },
  }),
  serviceController.create,
);

export default servicesRouter;
