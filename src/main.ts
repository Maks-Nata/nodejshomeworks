// import express, {Request, Response} from "express"
// import mongoose from "mongoose";
// import {userService} from "./services/user-service";
// import {IUserDTO} from "./interfaces/interfaces-user";
//
// const app=express()
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.get("/users",async (req:Request,res:Response)=>{
//     const data=userService.getAll()
//     res.json(data)
// })
// app.post("/users",async (req:Request,res:Response)=>{
//     const user=req.body as IUserDTO
//     const data=userService.create(user)
//     res.json(data)
// })
// app.get("/users/:id",async (req:Request,res:Response)=>{
//     const {id}=req.params
//     const data=userService.getById(id)
//     res.json(data)
// })

// const dbConnection=async ()=>{
//     let db=false
//     while (!db){
//         try {
// console.log("Connecting to db ")
//             await mongoose.connect('mongodb+srv://admin:admin@cluster0.1rzgb.mongodb.net//nodejs-express-db')
//
//             db=true
//             console.log('DataBase available !!!')
//         }
//         catch (error){
//             console.log("DataBase unavailable wait 3 second",error.message)
//             await new Promise(resolve => setTimeout(resolve,3000))
//         }
//     }
// }
// const start=async ()=>{
//     try {
//        await dbConnection()
//         app.listen(2222,()=>{
//             console.log("Server listening on 2222")
//         })
//     }
//     catch (e) {
//         console.log(e)
//     }
// }
// start()

import express from "express";
import mongoose from "mongoose";
import {config} from "./configs/config";
import {apiRouter} from "./routers/api.router";

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/", apiRouter)


const dbConnection = async ()=>{
    let dbCon = false

    while (!dbCon){
        try {
            console.log('Connecting to DB...');
            await mongoose.connect(config.MONGO_URI)
            dbCon =true
            console.log('Database available!!!');
        }catch (e) {
            console.log('Database unavailable, wait 3 seconds');
            await new Promise(resolve => setTimeout(resolve, 3000))
        }
    }
}

const start =async ()=>{
    try {
        await dbConnection()
        app.listen(config.PORT,()=>{
            console.log(`Server listening on ${config.PORT}`);
        })
    }catch (e) {
        console.log(e);
    }
}

start()




