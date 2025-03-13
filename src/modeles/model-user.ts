import {Schema} from "mongoose"
const usershema = new Schema(
    {
        name:{type:String,required:true},
        surname:{type:String,required:true},
        age:{type:String,required:true}
    },
    {}
)