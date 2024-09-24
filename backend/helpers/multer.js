import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
    diskStorage: (req, file, cb) => {
        cb(null, "./profiles")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const fileFilter = (req, file, cb) => {
    const allowedType = ["image/png", "image/jpg", "image/jpeg"]
    if (!allowedType.includes(file.mimetype)) {
        return cb(new Error("Invalid file type"))
    }
    cb(null, true)
}

const uploadMiddleware = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 }
}).single("profile")

export default uploadMiddleware