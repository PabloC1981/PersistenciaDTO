import UsersService from "../service/usersServis.js";

const userService = new UsersService();

const getUsers = async(req,res)=>{
    let result = await userService.getUsers();
    res.send(result)
}
const saveUser = async(req,res)=>{
    let user = req.body
    //Validaciones
    let result = await userService.addUser(user);
    res.send(result)
}
export default {
    getUsers,
    saveUser
}