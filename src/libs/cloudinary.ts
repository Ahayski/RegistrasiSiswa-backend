import { v2 as cloudinary } from "cloudinary";

export default new (class CloudinaryConfig {
  upload() {
    cloudinary.config({
      cloud_name: "dhrpg7eie",
      api_key: "974886694288585",
      api_secret: "xfr-HoJvI9nYaWI5_4QTOtj2xmI",
      secure: true,
    });
  }

  async destination(gambar: string): Promise<any> {
    try {
      return await cloudinary.uploader.upload(`src/uploads/${gambar}`, {
        folder: "CircleApp",
        tags: ["CircleApp"],
      });
    } catch (error) {
      throw error;
    }
  }
})();
