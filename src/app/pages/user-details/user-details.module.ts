import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDetailsPage } from './user-details.page';

import { UserDetailsPageRoutingModule } from './user-details-routing.module';
import { StorageService } from '../../services/storage.service';
import { UserDataService } from '../../services/user-data.service';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule, 
    SwiperModule,
    UserDetailsPageRoutingModule
  ], 
  declarations: [UserDetailsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class UserDetailsPageModule {}
