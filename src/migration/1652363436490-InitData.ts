import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1652444979301 implements MigrationInterface {
    name = 'InitialMigration1652444979301'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query (`insert into role (role) values ('user'), ('admin'), ('owner');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}