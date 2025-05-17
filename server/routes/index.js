import FileUpload from "../controller/uploads.js";
import upload from "../middlewares/upload-middlerware.js";
import express from 'express';

const routes = express.Router();

// for File Uploads
routes.post('/upload', upload.single('file'), FileUpload);

export default routes;