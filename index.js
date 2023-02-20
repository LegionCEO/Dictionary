import express from 'express'
import {dbPassword} from './config.js'
import mongoose from "mongoose";
import routers from "./BackEnd/routes/routers.js";

const PORT = process.env.PORT || 5000

const app = express()
//export const database = new MongoClient(`mongodb+srv://admin:${dbPassword}@dictionary.tdcqshv.mongodb.net/?retryWrites=true&w=majority`)
//export const testCollection = database.db().collection('TestCollection')

app.use(express.json())
app.use("/api", routers)

async function start() {
    try {
        //await database.connect()
        await mongoose.connect(`mongodb+srv://admin:${dbPassword}@dictionary.tdcqshv.mongodb.net/?retryWrites=true&w=majority`)
        console.log("DataBase has been connected...")
        //await database.db().createCollection("TestCollection")
        app.listen(PORT, () => {
            console.log("Server has been started...")
        })
    }catch (error){
        console.log(error)
    }
}

start()
