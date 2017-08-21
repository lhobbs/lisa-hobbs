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
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';
import { PhotoMenuComponent } from './components/photo-menu/photo-menu.component'; 
import { AboutComponent }   from './components/about/about.component';
import { ProjectsComponent }   from './components/projects/projects.component';
import { ResumeComponent }   from './components/resume/resume.component';
import { ResumeCardComponent } from './components/resume/resume-card/resume-card.component'
import { EducationComponent } from './components/resume/education/education.component'
import { CommunityOutreachComponent } from './components/resume/community-outreach/community-outreach.component'
import { ContactComponent }   from './components/contact/contact.component';
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
    ChatBotComponent,
    PhotoMenuComponent,
    AboutComponent,
    ProjectsComponent,
    ResumeComponent,
    ResumeCardComponent,
    EducationComponent,
    CommunityOutreachComponent,
    ContactComponent,
    ProjectDetailComponent,
    ProjectCardComponent
  ],
  providers: [ ConfigService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
