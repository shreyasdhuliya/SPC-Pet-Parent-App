import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { PetProfileComponent } from "./pet-profile.component";

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
    ],
    declarations: [PetProfileComponent],
    entryComponents:[PetProfileComponent],
    exports: [PetProfileComponent]
})

export class PetProfileModule {}