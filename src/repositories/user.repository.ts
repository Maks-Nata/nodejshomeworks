// import {IUser, IUserDTO} from "../interfaces/user.interface";
// import {User} from "../modeles/model-user";
//
// class UserReprository{
//     public getAll():Promise<IUser[]>{
//         return User.find()
//     }
//     public create(user:IUserDTO):Promise<IUser>{
//         return User.create(user)
//     }
//     public getById(userId:string):Promise<IUser>{
//         return User.findById(userId)
//     }
// }
// export const userReprository=new UserReprository()
import {IUser, IUserDTO} from "../interfaces/user.interface";
import {User} from "../models/user.model";

class UserRepository{
    public getAll():Promise<IUser[]>{
        return User.find()
    }
    public create(user:IUserDTO):Promise<IUser>{
        return User.create(user)
    }
    public updateById(userId:string,user:IUserDTO):Promise<IUser>{
        return User.findByIdAndUpdate(userId,user,{new :true})
    }
    public deleteById(userId:string):Promise<IUser>{
        return User.findByIdAndDelete(userId)
    }
    public getById(userId:string):Promise<IUser>{
        return User.findById(userId)
    }
}

export const userRepository = new UserRepository();