import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { WordpressComponent } from './wordpress/wordpress.component';
import { FlutterComponent } from './flutter/flutter.component';
import { DesignComponent } from './design/design.component';
import { OverallComponent } from './overall/overall.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PortfolioWorkComponent } from './portfolio-work/portfolio-work.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebDevelopmentComponent,
    WordpressComponent,
    FlutterComponent,
    DesignComponent,
    OverallComponent,
    HobbiesComponent,
    ExperienceComponent,
    ContactUsComponent,
    PortfolioWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
