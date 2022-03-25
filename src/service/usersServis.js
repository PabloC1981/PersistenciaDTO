import PersistenceFactory from "../daos/persistenceFactory.js"


export default class UsersService{
    constructor(){
        this.userDao 
        this.init();
    }
    init = async()=>{
        this.userDao = await PersistenceFactory.getPersistence();
    }
    addUser = async(user) =>{
        return await this.userDao.save(user)
    }
    getUsers = async() =>{
        return await this.userDao.getAll()
    }
}
// export default class UsersService{
//     constructor(){
//         this.userDao = new UserDao()
//     }
//     addUser = async(user) =>{
//         return await this.userDao.save(user)
//     }
//     getUsers = async() =>{
//         return await this.userDao.getAll()
//     }
// }

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
// /////////Persistencia Mongo/////////////
// export default class UsersService{
//     constructor(){
//         this.userDao = new UserDaoDB()
//     }
//     addUser = async(user) =>{
//         return await this.userDao.save(user)
//     }
//     getUsers = async() =>{
//         return await this.userDao.getAll()
//     }
// }