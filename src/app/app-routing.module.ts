import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './Modules/Bindings/binding/binding.component';
import { DirectivesComponent } from './Modules/Directives/directives/directives.component';
import { InputComponent } from './Modules/Input/input/input.component';
import { PipeComponent } from './Modules/Pipes/pipe/pipe.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'bindings',component:BindingComponent},
  {path:'directives',component:DirectivesComponent},
  {path:'pipe',component:PipeComponent},
  {path:'input',component:InputComponent},
  {path:'**',component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
