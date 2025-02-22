import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1740252330665 implements MigrationInterface {
  name = 'Migration1740252330665';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "expenses" DROP COLUMN "userId"`);
    await queryRunner.query(
      `ALTER TABLE "expenses" ADD "userId" numeric NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "expenses" DROP COLUMN "userId"`);
    await queryRunner.query(
      `ALTER TABLE "expenses" ADD "userId" uuid NOT NULL`,
    );
  }
}
