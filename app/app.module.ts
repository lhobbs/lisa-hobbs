//import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// import { AppRoutingModule } from './app-routing.module';

import { ConfigService } from './services/config.service';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './components/app/app.component';
import { HomeComponent }   from './components/home/home.component';
import { HomeMobileComponent } from './components/home/home-mobile.component';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';
import { PhotoMenuComponent } from './components/photo-menu/photo-menu.component'; 
import { AboutComponent }   from './components/about/about.component';
import { AboutMobileComponent } from './components/about/about-mobile.component';
import { ProjectsComponent }   from './components/projects/projects.component';
import { ProjectsMobileComponent } from './components/projects/projects-mobile.component';
import { ResumeComponent }   from './components/resume/resume.component';
import { ResumeMobileComponent } from './components/resume/resume-mobile.component';
import { ResumeCardComponent } from './components/resume/resume-card/resume-card.component';
import { ResumeCardMobileComponent } from './components/resume/resume-card/resume-card-mobile.component';
import { EducationComponent } from './components/resume/education/education.component';
import { EducationCardComponent } from './components/resume/resume-card/education-card.component';
import { CommunityOutreachComponent } from './components/resume/community-outreach/community-outreach.component';
import { CommunityOutreachMobileComponent } from './components/resume/community-outreach/community-outreach-mobile.component';
import { ContactComponent }   from './components/contact/contact.component';
import { ContactMobileComponent } from './components/contact/contact-mobile.component';
import { ProjectCardComponent } from './components/projects/project-card/project-card.component';
import { ProjectDetailComponent } from './components/projects/project-detail/project-detail.component';
// import { ProjectCategoryComponent } from './components/projects/project-category/project-category.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    //AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HomeMobileComponent,
    ChatBotComponent,
    PhotoMenuComponent,
    AboutComponent,
    AboutMobileComponent,
    ProjectsComponent,
    ProjectsMobileComponent,
    ResumeComponent,
    ResumeMobileComponent,
    ResumeCardComponent,
    ResumeCardMobileComponent,
    EducationComponent,
    EducationCardComponent,
    CommunityOutreachComponent,
    CommunityOutreachMobileComponent,
    ContactComponent,
    ContactMobileComponent,
    ProjectDetailComponent,
    ProjectCardComponent
  ],
  providers: [ ConfigService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
