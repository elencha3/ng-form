import { RegisterForm } from '../../models/register-form.model';
import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-sign',
    templateUrl: './sign.component.html' ,
    styleUrls: ['./sign.component.css'],
    providers: [
        AuthService
    ]
    
})

export class SignComponent implements OnInit {

    public title: string;
    
    constructor(
        private formBuilder: FormBuilder, //para crear el grupo de formulario y añadir los validadores
        private router: Router, //para poder navegar entre las páginas
        private authService: AuthService){ //para poder usar el servicio
            this.title = "Formulario de Registro";
        }
    
    ngOnInit(){}

    //Validación customizada para comprobar que los valores de los dos campos de contraseña coinciden
    mustMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        let passVal = control.get('pass');
        let passConfirmVal = control.get('passConfirm');

        return passVal?.value === passConfirmVal?.value ? null : { noMatch: true} ;
    };

    //Declaración de formulario y validaciones
    formularioRegistro = this.formBuilder.group({
        nombre: ['', Validators.required],
        apellidos: ['', Validators.required],
        telefono:  ['', Validators.required],
        email: ['', Validators.compose([Validators.email, Validators.required])],
        direccion: [''],
        localidad: [''],
        provincia: [''],
        pass: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
        passConfirm: [''], //Al añadir la validación para que coincidan, no es necesario añadir requerido (documentación Angular)
        conditionCheck: ['', Validators.requiredTrue]
    }, {validators: this.mustMatchValidator});

    

    //Acción al enviar formulario
    enviarFormulario(): void {
        console.log("Enviando formulario");
        //Convertir datos form a objeto
    let user: RegisterForm = new RegisterForm(
        this.formularioRegistro.value.nombre,
        this.formularioRegistro.value.apellidos,
        this.formularioRegistro.value.telefono,
        this.formularioRegistro.value.email,
        this.formularioRegistro.value.direccion,
        this.formularioRegistro.value.localidad,
        this.formularioRegistro.value.provincia,
        this.formularioRegistro.value.pass,
        this.formularioRegistro.value.passConfirm,
        this.formularioRegistro.value.conditionCheck   
    )
    //LLamo a la función del servicio y le paso el objeto Registerform para añadirlo al array
    this.authService.addUsers(user);
    
    //Una vez completado satisfactoriamente el formulario nos redirige al login
    this.router.navigate(['/login']);
    }
    
}