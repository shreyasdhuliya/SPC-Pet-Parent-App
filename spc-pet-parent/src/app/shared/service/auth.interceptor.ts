import { HttpInterceptor, HttpRequest, HttpHandler , HttpEvent, HttpErrorResponse} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError , } from 'rxjs/operators';
import { TokenService } from "./token.service";
import { UserService } from "./user.service";


@Injectable({
    providedIn: 'root',
})

export class AuthInterceptor implements HttpInterceptor {
    constructor(private tokenService: TokenService, private router: Router, private userService: UserService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
        if (this.tokenService.getToken()) {
            request = request.clone({
                setHeaders: { "x-auth-token": `${this.tokenService.getToken()}` }
            });
        }

        return next.handle(request)
    }

    private async logout() {
        this.tokenService.removeToken();
        this.userService.deleteUser();
        if(this.router.url !== '/login') {
            console.log("redirect");
             this.router.navigate(['login']);
        }

    };
    
}