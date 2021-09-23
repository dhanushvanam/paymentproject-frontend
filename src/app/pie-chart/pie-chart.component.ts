import { Component, OnInit } from '@angular/core';
import { GoogleChartComponent } from 'angular-google-charts';
import { ChartType } from "angular-google-charts";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  myType = ChartType.PieChart;
  title = 'Pie Chart representing percentage of number of transactions done by clients';
  type = 'PieChart';
  data = [
    ['DBS001', 5.0],
    ['DBS002', 36.8],
    ['DBS003', 42.8],
    ['DBS004', 18.5],
    ['DBS005', 16.2]
  ];
  columnNames = ['Client ID', 'Percentage'];
  options = {is3D: true,slices: {  
    1: {offset: 0.2},
    3: {offset: 0.3}                   
 }
  };
  width = 1250;
  height = 1000;
  constructor() { }

  ngOnInit(): void {
  }

}
