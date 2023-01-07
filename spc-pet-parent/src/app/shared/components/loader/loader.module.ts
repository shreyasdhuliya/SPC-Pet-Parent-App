import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { LoaderComponent } from "./loader.component";


@NgModule({
    declarations: [LoaderComponent],
    imports: [CommonModule, IonicModule],
    exports: [LoaderComponent]
})

export class LoaderModule {}