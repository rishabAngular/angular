import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public productList:any=[
    {'product_id':1001,'pname':'Laptop','price':30000,'custInfo':{'cust_id':11,'cust_name':'Anamika'}},
    {'product_id':1002,'pname':'Mobile','price':20000,'custInfo':{'cust_id':22,'cust_name':'Ratul'}},
    {'product_id':1003,'pname':'Watches','price':2000,'custInfo':{'cust_id':33,'cust_name':'Anish'}},
    {'product_id':1004,'pname':'T.V.','price':15000,'custInfo':{'cust_id':44,'cust_name':'Jabeen'}},
    {'product_id':1005,'pname':'A.C.','price':32000,'custInfo':{'cust_id':55,'cust_name':'Sinchana'}}
  ];

  constructor(private router:Router){ }

  onSelect(pItem:any){
    console.log(pItem.custInfo.cust_name);
    this.router.navigate(['/customer/profile',pItem.custInfo.cust_name])
    
  }
}
