import mongoose from "mongoose";
import {DB_NAME} from "./constants.js"
import express from "express"
import 'dotenv/config'
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