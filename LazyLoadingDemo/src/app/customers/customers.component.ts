import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit,AfterContentChecked{
  public customer_name:any='';
  constructor(private actRoute:ActivatedRoute){ }

  ngOnInit(): void {
    
  }
  ngAfterContentChecked(): void {
    this.customer_name = this.actRoute.snapshot.paramMap.get('nm');
  }

}
