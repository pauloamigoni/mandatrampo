import AppError from '@shared/errors/AppError';
import FakeProfessionsRepository from '../repositories/fakes/FakeProfessionsRepository';
import CreateProfessionService from './CreateProfessionService';

let fakeProfessionsRepository: FakeProfessionsRepository;
let createUser: CreateProfessionService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeProfessionsRepository = new FakeProfessionsRepository();
    createUser = new CreateProfessionService(fakeProfessionsRepository);
  });

  it('should be able to create a new profession', async () => {
    const user = await createUser.execute({
      name: 'Teste',
    });

    expect(user).toHaveProperty('id');
    expect(user.name).toBe('Teste');
  });
});
