import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransferComponent } from './transfer/transfer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { ReportComponent } from './report/report.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ProfileComponent,
    TransactionsComponent,
    TransferComponent,
    HomepageComponent,
    FooterComponent,
    LogoutComponent,
    ReportComponent,
    BarGraphComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GoogleChartsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: "profile", component: ProfileComponent,canActivate:[AuthGaurdService]
      },
      {
        path: "login", component: LoginComponent
      },
      {
        path: "", component: HomepageComponent
      },
      {
        path: "transfer", component: TransferComponent,canActivate:[AuthGaurdService]
      },
      {
        path: "transactions", component: TransactionsComponent,canActivate:[AuthGaurdService]
      },
      {
        path: "logout", component: LogoutComponent,canActivate:[AuthGaurdService]
      },
      {
        path: "report", component: ReportComponent,canActivate:[AuthGaurdService]
      }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
