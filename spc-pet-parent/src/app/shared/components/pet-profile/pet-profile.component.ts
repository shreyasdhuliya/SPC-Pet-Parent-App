import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
    selector: 'app-pet-profile',
    templateUrl: 'pet-profile.component.html',
    styleUrls: ['pet-profile.component.scss']
})

export class PetProfileComponent {

    constructor( private modalController: ModalController) {} 

    closeProfile() {
        this.modalController.dismiss();
    }
    
}