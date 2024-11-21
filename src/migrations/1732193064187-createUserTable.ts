import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1732193064187 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "users" (
        "id" SERIAL PRIMARY KEY,
        "firstName" VARCHAR NOT NULL,
        "lastName" VARCHAR NOT NULL,
        "age" INT NOT NULL,
        "gender" VARCHAR NOT NULL,
        "hasProblems" BOOLEAN DEFAULT FALSE
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
