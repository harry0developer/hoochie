import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDetailsPage } from './user-details.page';

import { UserDetailsPageRoutingModule } from './user-details-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    UserDetailsPageRoutingModule
  ],
  declarations: [UserDetailsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class UserDetailsPageModule {}
