import UserDao from "../daos/userdao.js"
import UserDaoFile from "../daos/userdaoFile.js";
export default class UsersService{
    constructor(){
        this.userDao = new UserDao()
    }
    addUser = async(user) =>{
        return await this.userDao.save(user)
    }
    getUsers = async() =>{
        return await this.userDao.getAll()
    }
}

///////////Persistencia File////////////

// export default class UsersService{
//     constructor(){
//         this.userDao = new UserDaoFile()
//     }
//     addUser = async(user) =>{
//         return await this.userDao.save(user)
//     }
//     getUsers = async() =>{
//         return await this.userDao.getAll()
//     }
// }