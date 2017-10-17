import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  newProduct = {
    name:"",
    price:""
  }

  constructor(private _productService: ProductService, private _route: Router, private _actRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  createThis(){
    this._productService.createProduct(this.newProduct);
    this._route.navigate(['list'])

  }

}
