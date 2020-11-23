import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import{MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarComponent } from './Shared/bar/bar.component';
import { LineComponent } from './Shared/line/line.component';
import { AnalyticsComponent } from './Pages/analytics/analytics.component';
import { BalanceComponent } from './Pages/balance/balance.component';
import { TableComponent } from './Shared/table/table.component';
import { HomeComponent } from './Pages/home/home.component';
import { CardComponent } from './Shared/card/card.component';
import { AdvisorComponent } from './Pages/advisor/advisor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarComponent,
    LineComponent,
    AnalyticsComponent,
    BalanceComponent,
    TableComponent,
    HomeComponent,
    CardComponent,
    AdvisorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
