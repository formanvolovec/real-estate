import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1651676961747 implements MigrationInterface {
    name = 'InitialMigration1651676961747'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query (`insert into role (role) values ('user'), ('admin'), ('owner'); `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
