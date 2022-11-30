import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SigninPage } from './signin.page';

import { SigninPageRoutingModule } from './signin';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SigninPageRoutingModule
  ],
  declarations: [SigninPage]
})
export class SigninPageModule {}
