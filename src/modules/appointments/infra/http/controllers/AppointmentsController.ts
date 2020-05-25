import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { provider_id, date } = request.body;

    const createAppoitment = container.resolve(CreateAppointmentService);

    const appointment = await createAppoitment.execute({
      user_id,
      provider_id,
      date,
    });

    return response.json(classToClass(appointment));
  }
}
