import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id;
  products;
  newProduct = {
    name: "",
    price:""
  }


  constructor(private _productService: ProductService, private _route: Router, private _actRoute: ActivatedRoute) {

   }

  ngOnInit() {
    this._actRoute.paramMap.subscribe( (params)=>{
      this.id = params.get('id')
      console.log(params.get('id'))
      this.setProdcut()
    })
    this._productService.getProducts((data)=>{
      this.products = data;
      console.log(this.products)
      this.setProdcut()
    })
    
  }
  editThis(){
    this._productService.editProduct(this.id, this.newProduct);
    this._route.navigate(['/list']);
  }
  setProdcut(){
    if(this.id !== undefined && this.products !== undefined){
      this.newProduct.name = this.products[this.id].name;
      this.newProduct.price = this.products[this.id].price;
    }else{
      return
    }
  }


}
