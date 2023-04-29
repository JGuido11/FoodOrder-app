import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():string[]{
    return[
      '/assets/Food-1.jpg',
      '/assets/Food-2.jpg',
      '/assets/Food-3.jpg',
      '/assets/Food-4.jpg',
      '/assets/Food-5.jpg',
      '/assets/Food-6.jpg',
      '/assets/Food-7.jpg',
      '/assets/Food-8.jpg'
    ]
  }

}
