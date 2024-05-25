import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";

@Entity({ name: "siswa" })
export class Siswa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipe_sekolah: string;

  @Column()
  nama_sekolah: string;

  @Column()
  alamat: string;

  @Column()
  kode_pos: string;

  @Column()
  provinsi: string;

  @Column()
  kota_kabupaten: string;

  @Column()
  no_telp: string;

  @Column()
  email_sekolah: string;

  @Column()
  facebook: string;

  @Column()
  jumlah_siswa: number;

  @Column()
  gambar: string;
}
