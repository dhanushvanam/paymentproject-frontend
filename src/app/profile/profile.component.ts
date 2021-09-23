import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customers: any;
  constructor(private dataSvc: DataService) {
  }

  ngOnInit(): void {
    if (this.dataSvc.getCustomers().length == 0) {
      this.dataSvc.getDataFromApi('http://localhost:8081/customers')
        .subscribe((result: any) => {
          this.customers = result.map((x: any) => {
            return { ...x, quantity: 0 }
          });
          this.dataSvc.setCustomers(this.customers);
        }, err => {
          console.log(err);
        })
    }
  }

}
