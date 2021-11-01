import { ComponentsModule } from './../components/components.module';
import { LoginComponent } from './login/login.component';

import { NgModule } from "@angular/core";
import { SignComponent } from './sign/sign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';


@NgModule({
    declarations: [
        LoginComponent,
        SignComponent
    ],
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