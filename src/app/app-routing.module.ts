import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BindingComponent } from './Modules/Bindings/binding/binding.component';
import { InputOutputComponent } from './Modules/component-interaction/input-output/input-output.component';
import { ViewChildComponent } from './Modules/component-interaction/view-child/view-child.component';
import { DirectivesComponent } from './Modules/Directives/directives/directives.component';
import { PipeComponent } from './Modules/Pipes/pipe/pipe.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'bindings',component:BindingComponent},
  {path:'directives',component:DirectivesComponent},
  {path:'pipe',component:PipeComponent},
  {path:'io', component:InputOutputComponent},
  {path:'vc',component:ViewChildComponent},
  {path:'**',component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
