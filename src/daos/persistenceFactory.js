import config from "../config/config.js";

export default class PersistenceFactory{
    static getPersistence = async()=>{
        switch(config.app.presistence){
             case"ARRAY":
             let {defaul:UserDao}= await import('./userdao.js')
             return new UserDao()
             break;
             case"FILE":
             let {defaul:UserDaoFile}= await import('./userdaoFile')
             return new UserDaoFile()
             break;
             case"FILE":
             let {defaul:UserDaoDB}= await import('./usersdaoDB')
             return new UserDaoDB()
             break;
        }
    } 
}