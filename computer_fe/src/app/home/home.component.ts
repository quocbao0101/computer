import { Component, Input, inject } from '@angular/core';
import { Home } from '../interface/home';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'computer_fe';
  category:string = "";
  home: Home[] = [];
  categoryService: HomeService = inject(HomeService);


  constructor() {
    this.home = this.categoryService.getCategory();
  }
}
