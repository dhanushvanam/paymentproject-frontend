import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {
  title = 'Year-wise Transactions (in INR)';
  type = ChartType.BarChart;
  data = [
     ["2016", 1200, 590],
     ["2017", 1000, 400],
     ["2018", 1170, 440],
     ["2019", 1250, 480],
     ["2020", 1530, 540],
     ["2021", 1930, 840]
  ];
  columnNames = ['Year', 'Credit','Debit'];
  options = {   
     hAxis: {
        title: 'Amount in INR'
     },
     vAxis:{
        minValue:0
     }  
  };
  width = 1200;
  height = 800;
  constructor() { }

  ngOnInit(): void {
  }

}
