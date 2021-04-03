import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { PersonalInfoComponent } from './Components/personal-info/personal-info.component';
import { ProfesionalInfoComponent } from './Components/profesional-info/profesional-info.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ContactPageComponent } from './Components/contact-page/contact-page.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ResumePageComponent } from './Components/resume-page/resume-page.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllMaterialModulesModule } from './all-material-modules/all-material-modules.module';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    PersonalInfoComponent,
    ProfesionalInfoComponent,
    HomePageComponent,
    ContactPageComponent,
    ResumePageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AllMaterialModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
