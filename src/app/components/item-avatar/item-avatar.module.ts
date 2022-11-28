import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemAvatarComponent } from './item-avatar.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ItemAvatarComponent],
  exports: [ItemAvatarComponent]
})
export class ItemAvatarComponentModule {}
