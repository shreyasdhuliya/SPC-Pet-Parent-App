import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LayoutPage } from './layout.page';

import { LayoutPageRoutingModule } from './layout-routing.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { PetProfileModule } from '../shared/components/pet-profile/pet-profile.module';
import { NavBarModule } from '../shared/components/nav-bar/nav-bar.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    NavBarModule,
    PetProfileModule,
    LayoutPageRoutingModule
  ],
  declarations: [LayoutPage]
})
export class LayoutPageModule {}
