import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { NavBarComponent } from "./nav-bar.component";

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
    ],
    declarations: [NavBarComponent],
    exports: [NavBarComponent]
})

export class NavBarModule {}