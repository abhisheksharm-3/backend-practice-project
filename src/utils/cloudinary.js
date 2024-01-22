import { v2 as cloudinary } from 'cloudinary';
import exp from 'constants';
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploadOnCloudinary = async (localServerPath) => {
    try {
        if (!localServerPath) return null
        //upload the file on clooudinary
        const resultUpload = await cloudinary.uploader.upload(localServerPath, {
            resource_type: 'auto'
        })
        //file uploaded
        console.log("Success in Uploading", resultUpload);
        return resultUpload
    } catch (error) {
        fs.unlinkSync(localServerPath) // remove the locally saved file as the upload operation failed
        return null
    }
}

export {uploadOnCloudinary}