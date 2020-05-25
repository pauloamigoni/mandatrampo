import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
  name: string;
  email: string;
  password: string;
  login: string;
  phone: string;
  celphone: string;
  address: string;
  city: string;
}
@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    name,
    email,
    password,
    login,
    phone,
    celphone,
    address,
    city,
  }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findByLogin(login);

    if (checkUserExists) {
      throw new AppError('Login already used.');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      login,
      phone,
      celphone,
      address,
      city,
    });

    await this.cacheProvider.invalidatePrefix('providers_lis');

    return user;
  }
}

export default CreateUserService;
