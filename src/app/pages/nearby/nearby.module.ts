import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NearbyPage } from './nearby.page';

import { NearbyPageRoutingModule } from './nearby-routing.module'; 
import { ItemAvatarComponentModule } from 'src/app/components/item-avatar/item-avatar.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ItemAvatarComponentModule,    
    NearbyPageRoutingModule
  ],
  declarations: [NearbyPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class NearbyPageModule {}
