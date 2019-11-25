import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() product; 
  @Input() productId; 
  
  constructor() { }

  ngOnInit() {
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify(){
    window.alert('You will be notified when the product goes on Sale');
  }
}