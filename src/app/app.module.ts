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
    AttributeDirectiveComponent
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
