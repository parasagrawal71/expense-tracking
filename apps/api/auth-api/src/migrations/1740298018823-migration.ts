import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1740298018823 implements MigrationInterface {
    name = 'Migration1740298018823'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_gender_enum" AS ENUM('m', 'f')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(30) NOT NULL, "username" character varying(15) NOT NULL, "email" character varying(40) NOT NULL, "age" integer NOT NULL, "password" character varying NOT NULL, "gender" "public"."users_gender_enum" NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_gender_enum"`);
    }

}
