export class LoginForm {
    //Declaro la clase formulario de login con todos los campos que tendrá mi formulario de login

    private _email: string;
    private _pass: string;
    
    constructor(email: string, pass: string) {
            this._email = email;
            this._pass = pass;
        }
    
    get email(): string {
        return this._email;
    }
    set email(value: string) {
        this._email = value;
    }

    get pass(): string {
        return this._pass;
    }
    set pass(value: string) {
        this._pass = value;
    }
    
}