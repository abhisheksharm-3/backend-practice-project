import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './.env'  //experimental code enabled in dev script to support this else use import 'dotenv/config'
})

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("App Encoutered an Error: ", error);
            throw error
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server Running at port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("Monfo DB Connection Failiure occured: ", err)
    })










/*
const app = express()

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error: ", error)
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})()  //iffi - execute when defined - starts with semicolon
*/