import { FileModel } from "../model/file.js";

const FileUpload = async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    try {
        const filename = req.file.filename;
        const originalname = req.file.originalname;
        const path = req.file.path;

        if (!filename) {
            return res.status(403).send({success: false, msg: 'File name is required'})
        }
        if (!originalname) {
            return res.status(403).send({success: false, msg: 'Orignal Name is required'})
        }
        if (!path) {
            return res.status(403).send({success: false, msg: 'Path is required'})
        }

        const newFileModel = new FileModel({
            filename: filename,
            originalname: originalname,
            path: path
        });

        await newFileModel.save();

        // upload it in the database
        return res.status(200).send({msg: 'Uploaded Successfully'})
    } catch (error) {
        return res.status(500).send({msg: 'Some Error Occurred', error})
    }
}
export default FileUpload;