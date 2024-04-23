import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserHomeLayoutComponent } from './user-home-layout/user-home-layout.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AuthLayoutComponent,
    HeaderComponent,
    FooterComponent,
    UserHomeLayoutComponent,
    UserNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
