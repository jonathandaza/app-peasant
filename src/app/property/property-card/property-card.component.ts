import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../property-list/IProperty.interfaz';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  @Input() product: IProperty;

  constructor() { }

  ngOnInit() {
  }

}
