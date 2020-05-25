import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { query } from 'express';

export class CreateCurriculum1590419550767 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'curriculum',
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
            name: 'curriculum',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'link_mediasocial',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'profession_id',
            type: 'uuid',
            isNullable: true,
          },

          {
            name: 'profession_others',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'experience_time',
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
            name: 'CurriculumUser',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],

        foreignKeys: [
          {
            name: 'ProfessionUser',
            referencedTableName: 'professions',
            referencedColumnNames: ['id'],
            columnNames: ['profession_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('curriculum');
  }
}
