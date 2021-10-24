import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FacilityComponent } from './facility/facility.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path: 'Home',component: HomeComponent},
  {path: 'About',component: AboutComponent},
  {path: 'Facility',component: FacilityComponent},
  {path: 'Review',component: ReviewComponent},
  {path: 'Contact',component: ContactComponent},
  {path: 'Post',component: PostComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
