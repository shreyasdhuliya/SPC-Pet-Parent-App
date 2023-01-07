import { Component } from "@angular/core";
import { LogoutService } from "../../service/logout.service";


@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})

export class HeaderComponent {

    constructor(
        private logoutService: LogoutService) {}

    

    logout() {
        this.logoutService.logout();
    }
    
}