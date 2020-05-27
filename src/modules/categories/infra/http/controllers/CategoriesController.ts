import { Request, Response } from 'express';

import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateCategorieService from '@modules/categories/services/CreateCategorieService';

export default class CategoriesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createCategorieService = container.resolve(CreateCategorieService);

    const user = await createCategorieService.execute({
      name,
    });

    return response.json(classToClass(user));
  }
}
