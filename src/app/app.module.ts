// imports de dependências de funcionalidades nativas do angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy , HashLocationStrategy, registerLocaleData } from '@angular/common';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import localePt from '@angular/common/locales/pt';

// import do componente de tratamento de erros
import { ApplicationErrorHandler } from './app.error-handler';

// import de dependências de rotas
import { ROUTES } from './app.routes';

// imports de módulos
import { SharedModule } from './shared/shared.module';

// imports de dependências de componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    MenuItemComponent,
    OrderSummaryComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    ReviewsComponent,
    ShoppingCartComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    SharedModule.forRoot(),
  ],
  providers: [ /* {provide: LocationStrategy, useClass: HashLocationStrategy},*/
                  {provide: LOCALE_ID, useValue: 'pt'},
                  {provide: ErrorHandler, useClass: ApplicationErrorHandler} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
