import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {
  images: any = [
    {
      id: 1,
      src: "https://images.squarespace-cdn.com/content/v1/599cd1a1d7bdce162a159255/1522941300480-LW36ZTUQG059MHV3TD8B/technology-3216744_1920.jpg?format=1000w",
    },
    {
      id: 2,
      src: "https://archi.ge/images/projects/ad394237fa9ba089ef99f1d4761f6b1f.jpg",
    },
    {
      id: 3,
      src: "https://archi.ge/images/projects/0e9ac8358f10b2bf7c3fc4ef3ad29623.jpg",
    },
    {
      id: 4,
      src: "https://ak.picdn.net/shutterstock/videos/1019269063/thumb/1.jpg",
    },
    {
      id: 5,
      src: "https://storage.googleapis.com/bd-ge-01/buildings/13452.jpg",
    },
  ];
  
  slideIndex = 0;

  product = {
    src: "https://archi.ge/images/projects/0e9ac8358f10b2bf7c3fc4ef3ad29623.jpg",
    name: "Apartments in Gldani",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  };
  
  constructor(private DataService:DataService, private route:ActivatedRoute) { 
    var ID = this.route.snapshot.paramMap.get('id');
    var data = this.DataService.getProductById(ID);
  }

  ngOnInit(): void {}

  slide(e:any) {
    if ( (this.slideIndex + e) == this.images.length) this.slideIndex = 0;
    else if ( (this.slideIndex + e) < 0) this.slideIndex = this.images.length - 1;
    else this.slideIndex += e;
    console.log(this.slideIndex);
  }
}
