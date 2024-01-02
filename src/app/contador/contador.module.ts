import { NgModule } from "@angular/core";
import { ContadorComponente } from "./components/contador/contador.component";

@NgModule({
  declarations: [ ContadorComponente ],
  exports: [ ContadorComponente ]
})

export class ContadorModule{

}
