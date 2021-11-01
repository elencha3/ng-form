import { LoginForm } from './../../models/login-form.model';

import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
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
        private formBuilder: FormBuilder, //para crear el grupo de formulario y añadir los validadores
        private router: Router, //para poder navegar entre las páginas
        private authService: AuthService){  //para poder usar el servicio
            this.title = "Login";
    }

    ngOnInit(){
        this.authService.getUsers();
    }


  //Declaración de formulario-login y validaciones
    formularioLogin = this.formBuilder.group({
        email: ['', Validators.compose([Validators.email, Validators.required])],
        pass: ['', Validators.required],
    })


  //Acción al enviar formulario. Redirige a la home sin comprobar si el user está registrado 
    enviarFormulario(): void {
        console.log("Enviando login");
      //Convertir datos form a objeto
        let userLog: LoginForm = new LoginForm(
            this.formularioLogin.value.email,
            this.formularioLogin.value.pass,
    )
            console.log(userLog);

            //Redirige a la home una vez completado el login
            this.router.navigate(['/home']);
    }
}
