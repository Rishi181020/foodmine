import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods;
  }
  getAllFoodsBySearchTerm(SearchTerm:string){
    return this.getAll().filter(food=>food.name.toLowerCase().includes(SearchTerm.toLowerCase()))
  }
}
