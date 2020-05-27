import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import { container } from 'tsyringe';

import CreateServiceService from '@modules/services/services/CreateServiceService';

export default class ServiceController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    console.log(request.body);

    const {
      name,
      description,
      address,
      city,
      phone,
      celphone,
      email,
      site,
      link_facebook,
      link_instagram,
      opening_hours,
      categories_id,
      categories_others,
    } = request.body;

    const createService = container.resolve(CreateServiceService);

    const service = await createService.execute({
      user_id,
      name,
      description,
      address,
      city,
      phone,
      celphone,
      email,
      site,
      link_facebook,
      link_instagram,
      opening_hours,
      categories_id,
      categories_others,
    });

    return response.json(classToClass(service));
  }
}
