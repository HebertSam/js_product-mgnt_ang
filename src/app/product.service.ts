import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductService {

  products = [
    {
      name: "Banana",
      price: "2",
    },
    {
      name: "Apple",
      price: "2.50",
    },
    {
      name: "Grapefruit",
      price: "3",
    },
    {
      name: "Bluberries",
      price: "4",
    }
  ]

  constructor(private _http: Http) { }

  getProducts(cb){
    return cb(this.products)
  }
  editProduct(id, prodcut){
    this.products.splice(id, 1, prodcut);
    console.log(this.products)
  }
  createProduct(prodcut){
    this.products.push(prodcut)
    console.log(this.products)
  }
  deleteProduct(id){
    this.products.splice(id, 1)
    console.log(this.products)
  }


}
