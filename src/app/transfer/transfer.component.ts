import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  transferFee: any;
  amount: any;
  customerid: any;
  customers: any;
  total: any;
  balance: any;

  constructor(private dataSvc: DataService,private http:HttpClient) {
    this.customers = [];
  }
  ngOnInit(): void {
    this.customerid='';
  }

  calculateFee() {
    this.transferFee = (this.amount * 0.25) / 100;
    this.total = this.transferFee + this.amount;
    if (this.total > this.customers.clearbalance) {
      alert('Total amount is greater than available account balance!!');
    }
  }
  autofillData() {
    const url = 'http://localhost:8081/customers/'+this.customerid;
    this.http.get(url).subscribe((res) => {
      this.customers = res;
      console.log(this.customers);
    })
  }

}
