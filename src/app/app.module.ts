import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './Modules/Bindings/data-binding/data-binding.component';
import { PropertyBindingComponent } from './Modules/Bindings/property-binding/property-binding.component';
import { EventBindingComponent } from './Modules/Bindings/event-binding/event-binding.component';
import { TwowayBindingComponent } from './Modules/Bindings/twoway-binding/twoway-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BindingComponent } from './Modules/Bindings/binding/binding.component';
import { DirectivesComponent } from './Modules/Directives/directives/directives.component';
import { StructuralDirectiveComponent } from './Modules/Directives/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './Modules/Directives/attribute-directive/attribute-directive.component';
import { BuiltInComponent } from './Modules/Pipes/built-in/built-in.component';
import { PipeComponent } from './Modules/Pipes/pipe/pipe.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CustomPipeComponent } from './Modules/Pipes/custom-pipe/custom-pipe.component';
import { AgePipe } from './Modules/Pipes/age.pipe';
import { ParentComponent } from './Modules/input/parent/parent.component';
import { ChildComponent } from './Modules/input/child/child.component';
import { CustomPipe } from './Modules/input/custom.pipe';
import { OutputChildComponent } from './Modules/Output/output-child/output-child.component';
import { OutputParentComponent } from './Modules/Output/output-parent/output-parent.component';
import { InputOutputComponent } from './Modules/component-interaction/input-output/input-output.component';
import { VcParentComponent } from './Modules/viewChild/vc-parent/vc-parent.component';
import { VcChildComponent } from './Modules/viewChild/vc-child/vc-child.component';
import { ViewChildComponent } from './Modules/component-interaction/view-child/view-child.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './User-Service/user/user.component';
import { UserserviceService } from './Service/userservice.service';
import { UserRestAPIComponent } from './User-Service/user-rest-api/user-rest-api.component';
import { PostapiComponent } from './crud/postapi/postapi.component';
import { PostapiService } from './Service/postapi.service';

import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';


import { ReactiveFormsComponent } from './Modules/reactive-forms/reactive-forms.component';
import { MaterialComponent } from './Modules/Material/material/material.component';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    BindingComponent,
    DirectivesComponent,
    StructuralDirectiveComponent,
    AttributeDirectiveComponent,
    BuiltInComponent,
    PipeComponent,
    PagenotfoundComponent,
    CustomPipeComponent,
    AgePipe,
    ParentComponent,
    ChildComponent,
    CustomPipe,
    OutputChildComponent,
    OutputParentComponent,
    InputOutputComponent,
    VcParentComponent,
    VcChildComponent,
    ViewChildComponent,
    UserComponent,
    UserRestAPIComponent,
    PostapiComponent,
    ReactiveFormsComponent,
    MaterialComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDividerModule
  ],
  providers: [UserserviceService,PostapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
