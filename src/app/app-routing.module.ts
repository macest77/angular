import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoloniaComponent } from './polonia/polonia.component';
import { CzarniComponent } from './czarni/czarni.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LegiaComponent } from './legia/legia.component';
import { MilanComponent } from './milan/milan.component';
import { StalComponent } from './stal/stal.component';

const routes: Routes = [
  { path: 'polonia', component: PoloniaComponent },
  { path: 'czarni', component: CzarniComponent },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'legia', component: LegiaComponent },
  { path: 'milan', component: MilanComponent },
  { path: 'stal', component: StalComponent },
  { path: '', redirectTo: '/mainpage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
