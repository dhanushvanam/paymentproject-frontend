import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions:any=[];

  constructor(private dataSvc:DataService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const url = 'http://localhost:8081/transaction';
    this.http.get(url).subscribe(res => {
      this.transactions = res;
      console.log(this.transactions);
    })
  }

}
