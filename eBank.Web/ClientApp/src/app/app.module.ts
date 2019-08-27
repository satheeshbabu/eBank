import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// 3rd party modules
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

// angular material modules
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// local modules & interceptors
import { AuthenticationModule } from './authentication/authentication.module';
import { AccountModule } from './accounts-dashboard/account.module';
import { httpInterceptorProviders } from './shared/http-interceptors';

// local components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';
import { NavigationBarComponent } from './shared/components/navigation-bar/navigation-bar.component';
import { NavComponent } from './shared/containers/nav/nav.component';
import { SharedModule } from './shared/modules/shared.module';
import { AccountDashboardComponent } from './accounts-dashboard/containers/account-dashboard/account-dashboard.component';

// local services

const routes: Routes = [
  { path: '', redirectTo: '/account', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    SideNavComponent,
    NavigationBarComponent,
    NavComponent
  ],
  imports: [
    // core modules
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CommonModule,
    // 3rd party modules
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    LoggerModule.forRoot({serverLoggingUrl: '/api/log/addlog', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR}),
    // angular material module
    MaterialModule,
    FlexLayoutModule,
    // local modules
    AuthenticationModule,
    AccountModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SharedModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
