import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import { container } from 'tsyringe';

import CreateCurriculumService from '@modules/curriculuns/services/CreateCurriculumService';

export default class CurriculumController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const {
      curriculum,
      link_mediasocial,
      description,
      profession_id,
      profession_others,
      experience_time,
    } = request.body;

    const createCurriculim = container.resolve(CreateCurriculumService);

    const curri = await createCurriculim.execute({
      user_id,
      curriculum,
      link_mediasocial,
      description,
      profession_id,
      profession_others,
      experience_time,
    });

    return response.json(classToClass(curri));
  }
}
