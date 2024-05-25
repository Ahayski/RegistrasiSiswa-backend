import { error } from "console";
import * as express from "express";
import * as multer from "multer";

export default new (class UploadImage {
  upload(fieldName: string) {
    const storage = multer.diskStorage({
      destination: (req, res, cb) => {
        cb(null, "src/uploads");
      },
      filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}.png`);
      },
    });

    const uploadFile = multer({ storage });

    return (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      uploadFile.single(fieldName)(req, res, (err: any) => {
        if (err) {
          console.error("Error during upload:", err);
          return res
            .status(400)
            .json({ message: "Error while processing Upload Image" });
        }

        // if (!req.file) {
        //     console.error("No file uploaded.");
        //     return res.status(400).json({ message: "No file uploaded" });
        // }

        if (req.file) {
          res.locals.filename = req.file.filename;
        }

        // res.locals.filename = req.file.filename;

        next();
      });
    };
  }
})();
