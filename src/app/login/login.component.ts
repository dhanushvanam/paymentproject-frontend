import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'Dhanush';
  password = 'dhanushhdfc';
  invalidLogin = false
  customerusers: any = [];
  data: any = [];

  constructor(private router: Router, private http: HttpClient,
    private loginservice: AuthenticationService, private dataSvc: DataService) {
  }
  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)) {
      this.router.navigate([''])
      this.invalidLogin = false
      this.getData();
    } else
      this.invalidLogin = true
  }

  getData() {
    const url = 'http://localhost:8081/customeruser';
    this.http.get(url).subscribe((res) => {
      this.data = res;
      console.log(this.data);
    })
  }


  ngOnInit(): void { }
  //   if (this.dataSvc.getCustomers().length == 0) {
  //     this.dataSvc.getDataFromApi('http://localhost:8081/customeruser')
  //       .subscribe((result: any) => {
  //         this.customerusers = result.map((x: any) => {
  //           return { x }
  //         });
  //         this.dataSvc.setCustomers(this.customerusers);
  //       }, err => {
  //         console.log(err);
  //       })
  //     console.log(this.customerusers);
  //   }
  //   console.log(this.customerusers);
  // }
  // loginForm: FormGroup;
  // constructor(private fb: FormBuilder,private router:Router) {
  //   this.loginForm = this.fb.group({
  //     username: new FormControl('', [Validators.required,
  //     Validators.minLength(6)
  //     // Validators.maxLength(10),
  //     // Validators.pattern(/^[a-z0-9]+$/i)
  //     ]),
  //     password: new FormControl('', [Validators.required,
  //     Validators.minLength(6),
  //     // Validators.maxLength(10),
  //     // Validators.pattern(/^[a-z0-9]+$/i)
  //     ])
  //   });
  // }
  // handleLogin(){
  //   console.log(this.loginForm.controls['username'].valid);
  //   console.log(this.loginForm.controls['username'].value);
  //   this.router.navigate(['/profile']);
  // }


  // ngOnInit(): void {
  // }
  // get username() {
  //   return this.loginForm.controls['username'];
  // }
  // get password() {
  //   return this.loginForm.controls['password'];
  // }

}
