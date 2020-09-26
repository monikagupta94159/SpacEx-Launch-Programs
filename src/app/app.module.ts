import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceXComponent } from './space-x/space-x.component';
import { SpacexService } from './space-x/spacex.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SpaceXComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [SpacexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
