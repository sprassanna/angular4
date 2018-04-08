import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroupDirective } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  myControl: FormControl = new FormControl();

  options = [
    "One",
    "Two",
    "Three"

  ];

  constructor() { 
    // Do nothing
  }

  ngOnInit() {
  }

}
