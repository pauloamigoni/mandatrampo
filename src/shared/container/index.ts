import { container } from 'tsyringe';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import NotificationsRepository from '@modules/notifications/infra/typeorm/repositories/NotificationsRepository';

import ICurriculunsRepository from '@modules/curriculuns/repositories/ICurriculunsRepository';
import CurriculunsRepository from '@modules/curriculuns/infra/typeorm/repositories/CurriculunsRepository';

import IProfessionsRepository from '@modules/professions/repositories/IProfessionsRepository';
import ProfissionsRepository from '@modules/professions/infra/typeorm/repositories/ProfissionsRepository';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import CategoriesRepository from '@modules/categories/infra/typeorm/repositories/CategoriesRepository';

import IServicesRepository from '@modules/services/repositories/IServicesRepository';
import ServicesRepository from '@modules/services/infra/typeorm/repositories/ServicesRepository';

import '@modules/users/providers';
import './providers';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<ICurriculunsRepository>(
  'CurriculunsRepository',
  CurriculunsRepository,
);

container.registerSingleton<IProfessionsRepository>(
  'ProfissionsRepository',
  ProfissionsRepository,
);

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<IServicesRepository>(
  'ServicesRepository',
  ServicesRepository,
);

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);

container.registerSingleton<INotificationsRepository>(
  'NotificationsRepository',
  NotificationsRepository,
);
