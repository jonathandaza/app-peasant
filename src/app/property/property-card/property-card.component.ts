import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  Products : any = {
    "Id": 1,
    "Name" : "Milk",
    "Brand" : "Alquería",
    "Type" : "Dairy",
    "Price" : 18000
  }

  constructor() { }

  ngOnInit() {
  }

}
