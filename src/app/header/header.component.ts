import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentDate: any;
  constructor(public loginService:AuthenticationService) { 
    this.currentDate = new Date();
  }

  ngOnInit(): void {
  }

}
