// import {Schema,model} from "mongoose"
// import {IUser} from "../interfaces/interfaces-user";
// const usershema = new Schema(
//     {
//         name:{type:String,required:true},
//         surname:{type:String,required:true},
//         age:{type:String,required:true}
//     },
//     {timestamps:true,versionKey:false}
// )
// export const User=model<IUser>("user",usershema)
import {Schema, model} from "mongoose";
import {IUser} from "../interfaces/user.interface";

const userSchema = new Schema(
    {
        name:{type:String, required:true},
        surname:{type:String, required:true},
        age:{type:Number, required:true}
    },
    {timestamps:true, versionKey:false}
);

export const User = model<IUser>("user", userSchema)