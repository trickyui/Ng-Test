import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { NavComponent } from './home/nav/nav.component';
import { UserListComponent } from './home/user-list/user-list.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PlayGroundComponent } from './play-ground/play-ground.component';
import { UppercaseDirective } from './directives/uppercase.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavComponent,
    UserListComponent,
    HighlightDirective,
    PlayGroundComponent,
    UppercaseDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
