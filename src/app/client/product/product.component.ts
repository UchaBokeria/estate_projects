import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  products = null;
  district:any = null;

  constructor(private DataService: DataService, private route: ActivatedRoute) { 
    this.district = this.route.snapshot.paramMap.get('name');
    this.products = DataService.getProducts();
  }

  ngOnInit(): void {

  }

}
