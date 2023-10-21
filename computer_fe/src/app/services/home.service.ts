import { Injectable } from '@angular/core';
import { Home } from '../interface/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  home: Home[] = [{
    id: 0,
    name: 'Acme Fresh Start Housing',
  },
  {
    id: 1,
    name: 'A113 Transitional Housing',
  },
  {
    id: 2,
    name: 'Warm Beds Housing Support',
  },
  {
    id: 3,
    name: 'Homesteady Housing',
  },
  {
    id: 4,
    name: 'Happy Homes Group',
  },
  {
    id: 5,
    name: 'Hopeful Apartment Group',
  },
  {
    id: 6,
    name: 'Seriously Safe Towns',
  },
  {
    id: 7,
    name: 'Hopeful Housing Solutions',
  },
  {
    id: 8,
    name: 'Seriously Safe Towns',
  },
  {
    id: 9,
    name: 'Capital Safe Towns',
  }]
  getCategory() {
    return this.home;
  }
  getCaterogyById(id: any) {
    return this.home.find((e) => e.id === id);
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

  // getHousingLocationById(id: number): HousingLocation | undefined {
  //   return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  // }
  constructor() { }
}
