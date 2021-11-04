import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  data: any = [
    {
      regions: [
        {
          id: 1,
          name: "Gldani",
          src: "https://archi.ge/images/projects/87b0e9c7136496505375757be38dbc38.jpg",
        },
        {
          id: 2,
          name: "Varketili",
          src: "https://archi.ge/images/projects/87b0e9c7136496505375757be38dbc38.jpg",
        },
        {
          id: 3,
          name: "Vera",
          src: "https://archi.ge/images/projects/87b0e9c7136496505375757be38dbc38.jpg",
        },
        {
          id: 4,
          name: "Vake",
          src: "https://archi.ge/images/projects/87b0e9c7136496505375757be38dbc38.jpg",
        },
        {
          id: 4,
          name: "Saburtalo",
          src: "https://archi.ge/images/projects/87b0e9c7136496505375757be38dbc38.jpg",
        },
        {
          id: 5,
          name: "Digomi",
          src: "https://archi.ge/images/projects/87b0e9c7136496505375757be38dbc38.jpg",
        },
        {
          id: 6,
          name: "Isani",
          src: "https://archi.ge/images/projects/87b0e9c7136496505375757be38dbc38.jpg",
        }
      ],
      products: [
        {
          id: 1,
          name: "R.j khucha 3",
          src: "https://archi.ge/images/projects/87b0e9c7136496505375757be38dbc38.jpg",
        },
        {
          id: 2,
          name: "R.j khucha 3",
          src: "https://archi.ge/images/projects/87b0e9c7136496505375757be38dbc38.jpg",
        },
        {
          id: 3,
          name: "R.j khucha 3",
          src: "https://archi.ge/images/projects/87b0e9c7136496505375757be38dbc38.jpg",
        },
        {
          id: 4,
          name: "R.j khucha 3",
          src: "https://archi.ge/images/projects/87b0e9c7136496505375757be38dbc38.jpg",
        },
        {
          id: 5,
          name: "R.j khucha 3",
          src: "https://archi.ge/images/projects/87b0e9c7136496505375757be38dbc38.jpg",
        },
        {
          id: 6,
          name: "R.j khucha 3",
          src: "https://archi.ge/images/projects/87b0e9c7136496505375757be38dbc38.jpg",
        },
        {
          id: 7,
          name: "R.j khucha 3",
          src: "https://archi.ge/images/projects/87b0e9c7136496505375757be38dbc38.jpg",
        },
        {
          id: 8,
          name: "R.j khucha 3",
          src: "https://archi.ge/images/projects/87b0e9c7136496505375757be38dbc38.jpg",
        },
        {
          id: 9,
          name: "R.j khucha 3",
          src: "https://archi.ge/images/projects/87b0e9c7136496505375757be38dbc38.jpg",
        },
        {
          id: 10,
          name: "R.j khucha 3",
          src: "https://archi.ge/images/projects/87b0e9c7136496505375757be38dbc38.jpg",
        },
      ],
    }

  ];

  constructor() { }

  getRegions() {
    return this.data[0].regions;
  }

  getProducts() {
    return this.data[0].products;
  }

  getProductById(id:any) {
    return this.data[0].products[id];
  }

  getRegionById(id:any) {
    
  }
}
