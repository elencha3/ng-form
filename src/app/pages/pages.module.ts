import { ComponentsModule } from './../components/components.module';
import { LoginComponent } from './login/login.component';

import { NgModule } from "@angular/core";
import { SignComponent } from './sign/sign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';


@NgModule({
    //Declaro los componentes que he creado y va a utilizar mi app
    declarations: [
        LoginComponent,
        SignComponent,
        HomeComponent
    ],
    //Importo los módulos que necesito tanto para formulario como el creado por mí de componentes para usar el navbar
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule
    ],
    exports: [
    
    ],
    providers: [],
})

export class PagesModule{}