import { Component, OnInit } from '@angular/core';
import { Product } from './../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public product: Product | any = []

  
  ngOnInit(): void {
    this.product.productName = "Mobile Phone"
  }


  onCreate(product: any) {
    console.log(product);
  }

}
