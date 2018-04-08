import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
/*import { HttpModule } from '@angular/http' ;*/
import { RouterModule } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { MatAutocompleteModule }   from '@angular/material/autocomplete';


import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';



@NgModule({
  declarations: [
    AppComponent,
     AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,MatAutocompleteModule,
    
    RouterModule.forRoot
    ([
           ],
      {useHash: true})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
