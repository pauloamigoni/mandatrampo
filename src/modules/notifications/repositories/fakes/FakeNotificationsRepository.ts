import { ObjectID } from 'mongodb';
import { getMongoRepository, MongoRepository } from 'typeorm';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';

import Notifications from '../../infra/typeorm/schemas/Notifications';

class NotificationsRepository implements INotificationsRepository {
  private notifications: Notification[] = [];

  public async create({
    content,
    recipient_id,
  }: ICreateNotificationDTO): Promise<Notifications> {
    const notification = new Notifications();

    Object.assign(notification, { id: new ObjectID(), content, recipient_id });
    this.notifications.push();

    return notification;
  }
}

export default NotificationsRepository;
