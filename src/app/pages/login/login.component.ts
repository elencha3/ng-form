import { LoginForm } from './../../models/login-form.model';

import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [
        AuthService
    ]
})
export class LoginComponent implements OnInit {

    public title: string;
    

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthService){
            this.title = "LogIn";
    }

    ngOnInit(){
        this.authService.getUsers();
    }


    // mustMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    //     let emailVal = control.get('pass');
    //     let passVal = control.get('passConfirm');

    //     return passVal?.value === passConfirmVal?.value ? null : { noMatch: true} ;
    // };

  //Declaración de formulario y validaciones
    formularioLogin = this.formBuilder.group({
        email: ['', Validators.compose([Validators.email, Validators.required])],
        pass: ['', Validators.required],
    })


  //Acción al enviar formulario
    enviarFormulario(): void {
        console.log("Enviando formulario");
      //Convertir datos form a objeto
        let userLog: LoginForm = new LoginForm(
            this.formularioLogin.value.email,
            this.formularioLogin.value.pass,
    )
            console.log(userLog)
    }
}
