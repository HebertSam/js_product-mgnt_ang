import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products;

  constructor(private _productService: ProductService) {
   }

  ngOnInit() {
    this._productService.getProducts((data)=>{
      this.products = data;
      console.log(this.products)
    })
  }
  deleteThis(id){
    this._productService.deleteProduct(id)
    
  }

}
