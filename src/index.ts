import { AppDataSource } from "./data-source";
import * as express from "express";
import * as cors from "cors";
import router from "./routes/index";
import "dotenv/config";

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    // CORS (Cross-Origin Resource Sharing) adalah kebijakan keamanan yang diterapkan oleh browser web
    // untuk melindungi pengguna dari potensi ancaman keamanan saat mereka mengakses sumber daya
    // di luar domain atau origin (asal) situs web yang sedang mereka kunjungi. Origin mencakup
    // protokol (http/https), domain, dan nomor port.
    app.use(
      cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        preflightContinue: true,
      })
    );

    app.use(express.json());
    app.use("/api/v1", router);

    app.listen(process.env.PORT, async () => {
      console.log("Server Running Cuy");
    });
  })
  .catch((error) => console.log(error));
