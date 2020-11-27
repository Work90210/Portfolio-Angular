import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DesignComponent } from './design/design.component';
import { FlutterComponent } from './flutter/flutter.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HomeComponent } from './home/home.component';
import { OverallComponent } from './overall/overall.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { WordpressComponent } from './wordpress/wordpress.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'development', component: WebDevelopmentComponent},
  {path: 'wordpress', component: WordpressComponent},
  {path: 'flutter', component: FlutterComponent},
  {path: 'design', component: DesignComponent},
  {path: 'overall', component: OverallComponent},
  {path: ' hobbies', component: HobbiesComponent},
  {path: 'contact', component: ContactComponent},
  // Portfolio pieces to be added below...
  // {path: 'portfolio', component: PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
