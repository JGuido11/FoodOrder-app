import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return[
      {
        id: 1,
        name: 'Pizza Quatro Queijos',
        price: 45,
        cookTime: '35-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/Food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 2,
        name: 'Pizza Pepperoni',
        price: 40,
        cookTime: '25-35',
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/Food-2.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 3,
        name: 'Pizza de Bacon',
        price: 50,
        cookTime: '45-55',
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/Food-3.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 4,
        name: 'Combo 500g de Carne',
        price: 40,
        cookTime: '25-35',
        favorite: false,
        origins: ['USA'],
        stars: 4.5,
        imageUrl: '/assets/Food-4.jpg',
        tags: ['FastFood', 'Hamburger','Lunch']
      },
      {
        id: 5,
        name: 'Hamburger com cheddar',
        price: 35,
        cookTime: '20-30',
        favorite: false,
        origins: ['USA'],
        stars: 4.5,
        imageUrl: '/assets/Food-5.jpg',
        tags: ['FastFood', 'Hamburger', 'Lunch']
      },
      {
        id: 6,
        name: 'Combo Double',
        price: 45,
        cookTime: '25-35',
        favorite: false,
        origins: ['USA'],
        stars: 4.5,
        imageUrl: '/assets/Food-6.jpg',
        tags: ['FastFood', 'Hamburger', 'Lunch']
      },
      {
        id: 7,
        name: 'Milkshake com Cobertura de Chocolate',
        price: 15,
        cookTime: '5-10',
        favorite: false,
        origins: ['USA'],
        stars: 4.5,
        imageUrl: '/assets/Food-7.jpg',
        tags: ['FastFood', 'Milkshake']
      },
      {
        id: 8,
        name: 'Batata Frita',
        price: 25,
        cookTime: '10-15',
        favorite: false,
        origins: ['belgium', 'france', 'indian'],
        stars: 4.5,
        imageUrl: '/assets/Food-8.jpg',
        tags: ['FastFood', 'Lunch']
      }
    ];
  }

}
