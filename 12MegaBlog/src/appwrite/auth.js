import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {

    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);

            if (userAccount) {
                // call another function
                return this.login({email,password});
            } else {
                return userAccount;
            }

        } catch (error) {
            console.log("Create user Error",error);
            
        }   
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            console.log("Login user Error",error);
            
        }
    }

    async getCurrentUser()
    {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Get current user Error",error); 
        }
        return null;
    }

    async logOut(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("LogOut user Error",error);
            
        }
    }

}

const authServiceObject = new AuthService();
 export default authServiceObject