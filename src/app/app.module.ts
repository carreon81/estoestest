import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { HeaderComponent } from './header/header.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
/* import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; */
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListProjectsComponent,
    NewProjectComponent,
    HeaderComponent,
    EditProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
/*     NgbModule, */
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
