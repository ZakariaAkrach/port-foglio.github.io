import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CoomingSoonComponent } from './shared/cooming-soon/cooming-soon.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'progetti', component: CoomingSoonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
