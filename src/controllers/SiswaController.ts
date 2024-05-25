import { Request, Response } from "express";
import SiswaServices from "../services/SiswaServices";
import cloudinary from "../libs/cloudinary";
// import { registerSchema, loginSchema } from "../utils/validator/AuthValidator";

export default new (class SiswaControllers {
  async getSiswa(req: Request, res: Response) {
    try {
      const response = await SiswaServices.getAll();
      return res.status(200).json(response);
    } catch (error) {
      console.error("Error getting all Siswa:", error);
      return res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  }

  async createSiswa(req: Request, res: Response) {
    try {
      const data = {
        tipe_sekolah: req.body.tipe_sekolah,
        nama_sekolah: req.body.nama_sekolah,
        alamat: req.body.alamat,
        kode_pos: req.body.kode_pos,
        provinsi: req.body.provinsi,
        kota_kabupaten: req.body.kota_kabupaten,
        no_telp: req.body.no_telp,
        email_sekolah: req.body.email_sekolah,
        facebook: req.body.facebook,
        jumlah_siswa: req.body.jumlah_siswa,
        gambar: res.locals.filename,
      };

      cloudinary.upload();
      const cloudinaryRes = await cloudinary.destination(data.gambar);

      const obj = {
        tipe_sekolah: data.tipe_sekolah,
        nama_sekolah: data.nama_sekolah,
        alamat: data.alamat,
        kode_pos: data.kode_pos,
        provinsi: data.provinsi,
        kota_kabupaten: data.kota_kabupaten,
        no_telp: data.no_telp,
        email_sekolah: data.email_sekolah,
        facebook: data.facebook,
        jumlah_siswa: data.jumlah_siswa,
        gambar: cloudinaryRes.secure_url,
      };
      console.log("ini obj", obj);
      const response = await SiswaServices.create(obj);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
})();
