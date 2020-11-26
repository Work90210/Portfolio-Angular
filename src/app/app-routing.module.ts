import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DesignComponent } from './design/design.component';
import { ExperienceComponent } from './experience/experience.component';
import { FlutterComponent } from './flutter/flutter.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
// Components
import { HomeComponent } from './home/home.component';
import { OverallComponent } from './overall/overall.component';
import { PortfolioWorkComponent } from './portfolio-work/portfolio-work.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { WordpressComponent } from './wordpress/wordpress.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'web', component: WebDevelopmentComponent },
  { path: 'wordpress', component: WordpressComponent },
  { path: 'flutter', component: FlutterComponent },
  { path: 'design', component: DesignComponent },
  { path: 'overall', component: OverallComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'portfolio', component: PortfolioWorkComponent },
  { path: 'contact', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
