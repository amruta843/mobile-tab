import { Component, OnInit } from '@angular/core';
import { ImobileProduct } from '../models/mobile';
import { mobileProducts } from '../contant/mobile';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  constructor() { }
  mobileArray :Array<ImobileProduct>  =[]
  ngOnInit(): void {
this.mobileArray = mobileProducts;

  }

}
