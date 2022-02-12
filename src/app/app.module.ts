import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RxjsTestComponent} from './rxjs-test/rxjs-test.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {AccordionComponent} from './accordion/accordion.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AccordionModule} from "primeng/accordion";
import {DialogModule} from "primeng/dialog";
import {DialogComponent} from './dialog/dialog.component';
import {CarouselModule} from "primeng/carousel";
import {CarouselComponent} from "./carousel/carousel.component";
import { GalleriaComponent } from './galleria/galleria.component';
import {GalleriaModule} from "primeng/galleria";

@NgModule({
  declarations: [
    AppComponent,
    RxjsTestComponent,
    DropdownComponent,
    AccordionComponent,
    DialogComponent,
    CarouselComponent,
    GalleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    AccordionModule,
    DialogModule,
    CarouselModule,
    GalleriaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
