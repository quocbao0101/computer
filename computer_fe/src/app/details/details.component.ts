import { Component, Input, inject } from '@angular/core';
import { Home } from '../interface/home';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../services/home.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  // route
  route: ActivatedRoute = inject(ActivatedRoute)
  //
  @Input('title') title = '';
  @Input('category') category: Home = {
    id: 0,
    name: '',
  };
  id: number = -1;
  categoryService: HomeService = inject(HomeService);
  newCategory: any;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  submitApplication() {
    this.categoryService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

  constructor() {
    this.id = Number(this.route.snapshot.params['id']);
    this.newCategory = this.categoryService.getCaterogyById(this.id);
    console.log(this.route.snapshot.params['id']);
}
}
