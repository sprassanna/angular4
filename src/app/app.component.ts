import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My App Works !!!';
  obj = {
    id : '1',
    name : 'Prassanna'
  };

  // Defining an Array
  arrValue = [ 'abc', 'def', 'ghi' ];

  isTrue = true;

  myName = 'Prassanna';
}
