import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
  
export class HomeComponent implements OnInit {
  products = null;

  constructor(private DataService: DataService) { 
    this.products = DataService.getRegions();
  }

  ngOnInit(): void {
  }

}
