import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './Modules/Bindings/data-binding/data-binding.component';
import { PropertyBindingComponent } from './Modules/Bindings/property-binding/property-binding.component';
import { EventBindingComponent } from './Modules/Bindings/event-binding/event-binding.component';
import { TwowayBindingComponent } from './Modules/Bindings/twoway-binding/twoway-binding.component';
import { FormsModule } from '@angular/forms';
import { BindingComponent } from './Modules/Bindings/binding/binding.component';
import { DirectivesComponent } from './Modules/Directives/directives/directives.component';
import { StructuralDirectiveComponent } from './Modules/Directives/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './Modules/Directives/attribute-directive/attribute-directive.component';
import { BuiltInComponent } from './Modules/Pipes/built-in/built-in.component';
import { PipeComponent } from './Modules/Pipes/pipe/pipe.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CustomPipeComponent } from './Modules/Pipes/custom-pipe/custom-pipe.component';
import { AgePipe } from './Modules/Pipes/age.pipe';
import { InputComponent } from './Modules/Input/input/input.component';
import { ParentComponent } from './Modules/Input/parent/parent.component';
import { ChildComponent } from './Modules/Input/child/child.component';


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
    InputComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
