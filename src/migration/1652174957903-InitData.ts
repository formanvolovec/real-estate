import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1652268747477 implements MigrationInterface {
    name = 'InitialMigration1652268747477'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query (`insert into role (role) values ('user'), ('admin'), ('owner');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
