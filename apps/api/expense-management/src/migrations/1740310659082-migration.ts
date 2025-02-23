import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1740310659082 implements MigrationInterface {
    name = 'Migration1740310659082'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_499c4f1fbe351b751585e771f11"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_499c4f1fbe351b751585e771f11" FOREIGN KEY ("expenseId") REFERENCES "expenses"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_499c4f1fbe351b751585e771f11"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_499c4f1fbe351b751585e771f11" FOREIGN KEY ("expenseId") REFERENCES "expenses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
