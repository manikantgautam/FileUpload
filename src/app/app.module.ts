import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FileAddComponent } from './components/file-add/file-add.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

const appRoutes:Routes=[
  {path:'',component:FileListComponent},
  {path:'uploadFiles',component:FileAddComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    FileListComponent,
    FileAddComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,ChartsModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,NgxPaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
