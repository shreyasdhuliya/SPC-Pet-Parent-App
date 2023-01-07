import { Component } from '@angular/core';
import { TokenService } from 'src/app/shared/service/token.service';
import { ApiService } from '../shared/service/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../shared/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage  {
  loading = true;
  loginForm = new FormGroup({
    flatNumber: new FormControl('', [ Validators.minLength(4),Validators.maxLength(4), Validators.required ]),
    password: new FormControl('', [ Validators.minLength(4), Validators.required]),
  });
  buttonType: string = "";
  errorMsg = "";
  successMsg = "";

  constructor(private apiService: ApiService, private tokenService: TokenService, private userService: UserService, private router: Router) {}

  ionViewWillEnter(): void {
    if(!this.tokenService.getToken()) {
      this.loading = false;
    }  else {
      this.apiService.get('/api/auth').subscribe((userDetails) => {
      this.loading = false;
      this.userService.setUser(userDetails.user);
      this.router.navigate(['layout']);
      }, err => {
        this.loading = false;
        this.errorMsg = "something went wrong, please login again!"
        this.tokenService.removeToken();
        this.userService.deleteUser();
      });
    }
  }

  keypress(event: any) {
    
    const pattern = /[0-9\+\-\ ]/;
    if (!pattern.test(event.key)) {
      // invalid character, prevent input
      event.preventDefault();
    }
}

  onSubmit(buttonType: any): void {
    if(buttonType === 'login') {

      const config = {
        headers:{   
            'Content-Type':'application/json'
        }   
    }
    const body= JSON.stringify({ 
      user: this.loginForm.controls.flatNumber.value ,
      password: this.loginForm.controls.password.value,
    });
    console.log(body)
    this.apiService.post('/api/auth', body, config).subscribe((jwt) => {
      console.log(jwt);
      this.errorMsg = "";
      this.successMsg = "";
      this.tokenService.setToken(jwt.token);
      this.userService.setUser(this.loginForm.controls.flatNumber.value);
      this.loginForm.reset();
      this.router.navigate(['layout']);
      console.log("success");
    }, (err) => {
      this.errorMsg = err.error?.description ?? "";
      this.successMsg = "";
    });

    } else if (buttonType === 'signup') {
      const config = {
        headers:{   
            'Content-Type':'application/json'
        }   
      }
      const body= JSON.stringify({ 
        user: this.loginForm.controls.flatNumber.value ,
        password: this.loginForm.controls.password.value,
        app: "SPC",
        rolw: "user",
      });
      console.log(body);
      this.apiService.post('/api/users', body, config).subscribe((jwt) => {
        console.log(jwt);
        this.errorMsg = ""
        this.successMsg = "You have successfully signed up, it is under review from admin this usually takes 24 hours";
        this.loginForm.reset();
        console.log("success");
      }, (err) => {
        console.log(err.error.description);
        this.errorMsg = err.error?.description ?? "";
        this.successMsg = "";
      });
    }
  }
  
}
