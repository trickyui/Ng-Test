import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { UserListComponent } from './home/user-list/user-list.component';
import { AuthGuard } from 'src/services/auth.guard';
import { PlayGroundComponent } from './play-ground/play-ground.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'users', component: UserListComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', component: UserListComponent }
    ]
  },
  // { path: '', redirectTo: '/signup', pathMatch: 'full' },
  {path: '', component: PlayGroundComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
