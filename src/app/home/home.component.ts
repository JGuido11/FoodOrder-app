import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:string[]= [];

  constructor(private fs:FoodService){}

  ngOnInit(): void{
    this.foods = this.fs.getAll();
    //metodo para trazer todas as imagens do assets para a home page
  }

}
