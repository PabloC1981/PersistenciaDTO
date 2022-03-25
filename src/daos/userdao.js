export default class UserDao {
    constructor(){
    this.users = [];
    }
    getAll = async() =>{
        return this.users;
    }
    save = async(user) =>{
        if(this.users.length===0) user.id=1;
        else user.id = this.users[this.users.length-1].id+
        this.users.push(user)
        return user;

    }
}