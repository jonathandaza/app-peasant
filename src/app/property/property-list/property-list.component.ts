import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProperty } from './IProperty.interfaz';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Products : Array<IProperty>;

  constructor(private productService: ProductService ) { }

  ngOnInit() {
    this.productService.getAll().subscribe(
      data => {
        this.Products = data;
      }, error =>  console.log(error)
    )
  }

}
