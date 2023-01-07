import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class TokenService {

     setToken(token: string) {
        localStorage.setItem('spcToken', token);
     }

     getToken(): any {
        return localStorage.getItem('spcToken');
     }

     removeToken(): void {
      localStorage.removeItem('spcToken');
     }

}