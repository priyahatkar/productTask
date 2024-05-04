import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productData: any = {}
  constructor(private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.viewProduct();
    })
  }
  
  viewProduct() {
    debugger
    this.productData = JSON.parse(localStorage.getItem('product')!)
    console.log(this.productData);
  }
}
