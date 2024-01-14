import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json({
    limit: "16kb" //depends on server capacity
}))

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
})) //used for URL Data Acceptance

app.use(express.static("public"))  //used for static public data storage

app.use(cookieParser()) // cookie manipulation securely using server

export { app }