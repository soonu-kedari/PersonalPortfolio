import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './Components/contact-page/contact-page.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { PersonalInfoComponent } from './Components/personal-info/personal-info.component';
import { ProfesionalInfoComponent } from './Components/profesional-info/profesional-info.component';
import { ResumePageComponent } from './Components/resume-page/resume-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  {
    path: 'dashboard',
    component: DashBoardComponent,
    children: [
      { path: '', component: PersonalInfoComponent },
      { path: 'personalinfo', component: PersonalInfoComponent },
      { path: 'professionalinfo', component: ProfesionalInfoComponent },
      { path: 'contactInfo', component: ContactPageComponent },
      { path: 'resume', component: ResumePageComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
