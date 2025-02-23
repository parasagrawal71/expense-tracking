import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1740310169788 implements MigrationInterface {
    name = 'Migration1740310169788'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comments" ("id" SERIAL NOT NULL, "content" text NOT NULL, "userId" numeric NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "expenseId" integer NOT NULL, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_499c4f1fbe351b751585e771f11" FOREIGN KEY ("expenseId") REFERENCES "expenses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_499c4f1fbe351b751585e771f11"`);
        await queryRunner.query(`DROP TABLE "comments"`);
    }

}
