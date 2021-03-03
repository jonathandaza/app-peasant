import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Products : Array<any> = [{
    "Id": 1,
    "Name" : "Milk",
    "Brand" : "Alquería",
    "Type" : "Dairy",
    "Price" : 18000
  },
  {
    "Id": 2,
    "Name" : "Rice",
    "Brand" : "Doña Diana",
    "Type" : "Normal",
    "Price" : 5000
  },
  {
    "Id": 3,
    "Name" : "Pasta",
    "Brand" : "Spagethi",
    "Type" : "Normal",
    "Price" : 900
  },
  {
    "Id": 4,
    "Name" : "Avocado",
    "Brand" : "X-X",
    "Type" : "Fruit",
    "Price" : 500
  },
  {
    "Id": 5,
    "Name" : "Apple",
    "Brand" : "Colombian",
    "Type" : "Fruit",
    "Price" : 300
  }]

  constructor() { }

  ngOnInit() {

  }

}
