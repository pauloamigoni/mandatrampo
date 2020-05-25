import { inject, injectable } from 'tsyringe';

import Service from '../infra/typeorm/entities/Service';
import IServicesRepository from '../repositories/IServicesRepository';

interface IRequest {
  name: string;
  user_id: string;
  description: string;
  address: string;
  city: string;
  phone: string;
  celphone: string;
  email: string;
  site: string;
  link_facebook: string;
  link_instagram: string;
  opening_hours: string;
  categories_id: string;
  categories_others: string;
}
@injectable()
class CreateServiceService {
  constructor(
    @inject('ServicesRepository')
    private servicesRepository: IServicesRepository,
  ) {}

  public async execute({
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
  }: IRequest): Promise<Service> {
    const service = await this.servicesRepository.create({
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

    return service;
  }
}

export default CreateServiceService;
