import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1740297869932 implements MigrationInterface {
  name = 'Migration1740297869932';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."expenses_category_enum" AS ENUM('Food', 'Transport', 'Shopping', 'Bills', 'Entertainment', 'Other')`,
    );
    await queryRunner.query(
      `CREATE TABLE "expenses" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "amount" numeric(10,2) NOT NULL, "description" text, "category" "public"."expenses_category_enum" NOT NULL DEFAULT 'Other', "expenseDate" TIMESTAMP NOT NULL DEFAULT now(), "userId" numeric NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_94c3ceb17e3140abc9282c20610" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "expenses"`);
    await queryRunner.query(`DROP TYPE "public"."expenses_category_enum"`);
  }
}
