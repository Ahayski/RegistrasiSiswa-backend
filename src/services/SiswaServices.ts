import { Repository } from "typeorm";
import { Siswa } from "../entity/Siswa";
import { AppDataSource } from "../data-source";

export default new (class SiswaService {
  private readonly SiswaRepository: Repository<Siswa> =
    AppDataSource.getRepository(Siswa);

  async getAll(): Promise<object> {
    try {
      const response = await this.SiswaRepository.find();
      return {
        message: "success getting all Siswa",
        data: response,
      };
    } catch (error) {
      throw error;
    }
  }

  async create(reqBody: object): Promise<object> {
    try {
      const siswa = await this.SiswaRepository.save(reqBody);
      console.log("ini siswa", siswa);
      return {
        message: "success",
        data: siswa,
      };
    } catch (error) {
      throw error;
    }
  }
})();
