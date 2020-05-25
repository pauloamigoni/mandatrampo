import { getRepository, Repository } from 'typeorm';
import Service from '@modules/services/infra/typeorm/entities/Service';

import IServicesRepository from '@modules/services/repositories/IServicesRepository';
import ICreateServiceDTO from '@modules/services/dtos/ICreateServiceDTO';

class ServicesRepository implements IServicesRepository {
  private ormRepository: Repository<Service>;

  constructor() {
    this.ormRepository = getRepository(Service);
  }

  public async create({
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
  }: ICreateServiceDTO): Promise<Service> {
    const service = this.ormRepository.create({
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

    await this.ormRepository.save(service);

    return service;
  }
}

export default ServicesRepository;
