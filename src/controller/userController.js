import UsersService from "../service/usersServis.js";
import UserDTO from "../dtos/userDTO.js";
const userService = new UsersService();

const getUsers = async(req,res)=>{
    let result = await userService.getUsers();
    let resultDTO = result.map(user=>new UserDTO(user))
    res.send(resultDTO)
}
const saveUser = async(req,res)=>{
    let user = req.body
    //Validaciones
    let result = await userService.addUser(user);
    res.send(new UserDTO(result))
}
export default {
    getUsers,
    saveUser
}