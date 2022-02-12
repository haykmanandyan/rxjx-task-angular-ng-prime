import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DropdownComponent} from "./dropdown/dropdown.component";
import {AccordionComponent} from "./accordion/accordion.component";
import {DialogComponent} from "./dialog/dialog.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {GalleriaComponent} from "./galleria/galleria.component";

const routes: Routes = [
  {path: '', redirectTo: 'dropdown', pathMatch: 'full'},
  {path: 'dropdown', component: DropdownComponent},
  {path: 'accordion', component: AccordionComponent},
  {path: 'dialog', component: DialogComponent},
  {path: 'carousel', component: CarouselComponent},
  {path: 'galleria', component: GalleriaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
