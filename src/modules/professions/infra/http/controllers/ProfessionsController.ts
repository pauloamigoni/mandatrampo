import { Request, Response } from 'express';

import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateProfessionService from '@modules/professions/services/CreateProfessionService';

export default class ProfessionsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createProfessionService = container.resolve(CreateProfessionService);

    const user = await createProfessionService.execute({
      name,
    });

    return response.json(classToClass(user));
  }
}
