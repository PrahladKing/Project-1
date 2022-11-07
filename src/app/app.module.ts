import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgChartsModule} from 'ng2-charts';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { AppService } from "./app.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { myRoutes} from   './app-routing.module';
import { MaterialModule } from "./material.module";
import { MatFormFieldModule } from "@angular/material/form-field";


@NgModule({
  declarations: [AppComponent, myRoutes],
  imports: [
    MaterialModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatFormFieldModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})

export class AppModule {}