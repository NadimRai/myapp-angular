import { Component } from '@angular/core';

@Component({
  selector: 'app-pies-list',
  templateUrl: './pies-list.component.html',
  styleUrls: ['./pies-list.component.css']
})
export class PiesListComponent {

  
  favoritePies: string[] = ["Apple", "Banana Cream", "Blackberry"];


}
