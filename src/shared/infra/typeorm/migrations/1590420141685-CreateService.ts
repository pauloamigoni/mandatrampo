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
            isNullable: true,
          },

          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'address',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'city',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'phone',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'celphone',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'email',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'site',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'link_facebook',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'link_instagram',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'opening_hours',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'categories_id',
            type: 'uuid',
            isNullable: true,
          },

          {
            name: 'categories_others',
            type: 'varchar',
            isNullable: true,
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
