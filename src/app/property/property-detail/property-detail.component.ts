import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public productId: number;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.productId = this.router.snapshot.params['id'];
  }

}
