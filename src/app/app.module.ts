import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
/*import { HttpModule } from '@angular/http' ;*/
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { AllComponentComponent } from './all-component/all-component.component';
import { AddItemComponent } from './add-item/add-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    AllComponentComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot
    ([
      {path: 'mine', component: MyComponentComponent },
      {path: 'all', component: AllComponentComponent }

      ],
      {useHash: true})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
