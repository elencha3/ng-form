
import { Injectable } from "@angular/core";
import { RegisterForm } from "../models/register-form.model";


@Injectable()
export class AuthService{

    //Creo array con los registros

    private users: Array<RegisterForm> = [];

    //Método para añadir registro al array con push y muestro por consola el array.
    addUsers(user: RegisterForm) {
        this.users.push(user);
        console.log(this.users);
    }

    //Mostrar usuarios de array en consola
    getUsers(){
        console.log(this.users);
    }
}