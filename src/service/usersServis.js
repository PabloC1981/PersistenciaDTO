import UserDao from "../daos/userdao.js";

export default class UsersService{
    constructor(){
        this.userDao = new UserDao
    }
    addUser = async(user) =>{
        return await this.userDao.save(user)
    }
    getUsers = async() =>{
        return await this.userDao.getAll()
    }
}