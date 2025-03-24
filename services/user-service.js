const {userRepository} = require("../repositories/user-repository");


class UserService{
    async getAll(){
        return await userRepository.getAll()
    }
    async getById(id){
        return await  userRepository.getById(id)
    }
    async create(user){
        return await userRepository.create(user)
    }
    async updateById(id,user){
        return await userRepository.updateById(id,user)
    }
    async deleteById(id){
        return await userRepository.deleteById(id)
    }
}
const userService=new UserService()
module.exports={
    userService
}