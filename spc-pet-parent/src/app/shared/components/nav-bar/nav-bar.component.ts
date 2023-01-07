import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { PetProfileComponent } from "../pet-profile/pet-profile.component";


@Component({
    selector: 'app-nav-bar',
    templateUrl: 'nav-bar.component.html',
    styleUrls: ['nav-bar.component.scss']
})

export class NavBarComponent {

    constructor(private modalController: ModalController) {}

    async openProfile() {
        const modal = await this.modalController.create({
            component: PetProfileComponent,
            cssClass: 'full-height-width'
        });
        await modal.present();
    }
}