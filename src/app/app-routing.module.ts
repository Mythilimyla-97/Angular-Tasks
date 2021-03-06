import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './Auth Guard/auth.guard';
import { PostapiComponent } from './crud/postapi/postapi.component';
import { BindingComponent } from './Modules/Bindings/binding/binding.component';
import { InputOutputComponent } from './Modules/component-interaction/input-output/input-output.component';
import { ViewChildComponent } from './Modules/component-interaction/view-child/view-child.component';
import { DirectivesComponent } from './Modules/Directives/directives/directives.component';
import { MaterialComponent } from './Modules/Material/material/material.component';
import { PipeComponent } from './Modules/Pipes/pipe/pipe.component';
import { PromiseObservableComponent } from './Modules/Promise Observables/promise-observable/promise-observable.component';
import { ReactiveFormsComponent } from './Modules/reactive-forms/reactive-forms.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddUserComponent } from './User-Service/add-user/add-user.component';
import { UnsaveGuard } from './User-Service/unsave.guard';
import { UserRestAPIComponent } from './User-Service/user-rest-api/user-rest-api.component';
import { UserComponent } from './User-Service/user/user.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'bindings',component:BindingComponent},
  {path:'directives',component:DirectivesComponent},
  {path:'pipe',component:PipeComponent},
  {path:'io', component:InputOutputComponent},
  {path:'vc',component:ViewChildComponent},

  {path:'user',component:UserComponent,
  canActivate : [AuthGuard]},

  {path:'userapi',component:UserRestAPIComponent},
  {path:'post',component:PostapiComponent},
  {path:'forms',component:ReactiveFormsComponent},
  {path:'material',component:MaterialComponent},
  {path:'users/:id',component:UserComponent},
  {path:'po',component:PromiseObservableComponent},
  {path:'adduser',component:AddUserComponent, canDeactivate:[UnsaveGuard]},
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
  { path: 'lazymodule', loadChildren: () => import('./Auth Guard/lazy/lazy.module').then(m => m.LazyModule) },
  {path:'**',component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
