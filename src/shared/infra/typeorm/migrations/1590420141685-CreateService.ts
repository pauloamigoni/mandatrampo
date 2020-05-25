import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { query } from 'express';

export class CreateService1590420141685 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'services',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_id',
            type: 'uuid',
          },

          {
            name: 'name',
            type: 'varchar',
          },

          {
            name: 'description',
            type: 'varchar',
          },

          {
            name: 'address',
            type: 'varchar',
          },

          {
            name: 'city',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'phone',
            type: 'varchar',
          },

          {
            name: 'celphone',
            type: 'varchar',
          },

          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'site',
            type: 'varchar',
          },
          {
            name: 'link_facebook',
            type: 'varchar',
          },
          {
            name: 'link_instagram',
            type: 'varchar',
          },

          {
            name: 'opening_hours',
            type: 'varchar',
          },

          {
            name: 'categories_id',
            type: 'uuid',
          },

          {
            name: 'categories_others',
            type: 'varchar',
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'ServicesUser',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],

        foreignKeys: [
          {
            name: 'CategoriesUser',
            referencedTableName: 'categories',
            referencedColumnNames: ['id'],
            columnNames: ['categories_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('services');
  }
}
