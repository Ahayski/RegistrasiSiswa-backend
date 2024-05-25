import * as express from "express";
import UploadFile from "../middlewares/UploadFile";
import SiswaController from "../controllers/SiswaController";

const router = express.Router();
// const upload = multer();

//Siswa
router.get("/siswa", SiswaController.getSiswa);
router.post("/siswa", UploadFile.upload("gambar"), SiswaController.createSiswa);

export default router;
