import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigrations1716658652660 implements MigrationInterface {
    name = 'MyMigrations1716658652660'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "siswa" ("id" SERIAL NOT NULL, "tipe_sekolah" character varying NOT NULL, "nama_sekolah" character varying NOT NULL, "alamat" character varying NOT NULL, "kode_pos" character varying NOT NULL, "provinsi" character varying NOT NULL, "kota_kabupaten" character varying NOT NULL, "no_telp" character varying NOT NULL, "email_sekolah" character varying NOT NULL, "facebook" character varying NOT NULL, "jumlah_siswa" integer NOT NULL, "gambar" character varying NOT NULL, CONSTRAINT "PK_8ce1ff71b8d1e5fe6596c8b2bb7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "siswa"`);
    }

}
