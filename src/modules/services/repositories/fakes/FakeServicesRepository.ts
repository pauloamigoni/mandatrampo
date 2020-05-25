import { uuid } from 'uuidv4';

import Service from '@modules/services/infra/typeorm/entities/Service';

import IServicesRepository from '@modules/services/repositories/IServicesRepository';

import ICreateServiceDTO from '@modules/services/dtos/ICreateServiceDTO';

class FakeServicesRepository implements IServicesRepository {
  private appointments: Service[] = [];

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
    const service = new Service();

    Object.assign(service, {
      id: uuid(),
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

    this.appointments.push(service);

    return service;
  }
}

export default FakeServicesRepository;
