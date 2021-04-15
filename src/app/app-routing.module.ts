import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './Modules/Bindings/binding/binding.component';
import { DirectivesComponent } from './Modules/Directives/directives/directives.component';

const routes: Routes = [
  {path:'bindings',component:BindingComponent},
  {path:'directives',component:DirectivesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
