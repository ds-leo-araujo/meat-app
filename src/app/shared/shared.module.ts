import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

import { AuthInterceptor } from '../security/auth.interceptor';
import { LeaveOrderGuard } from '../order/leave-order.guard';
import { LoggedInGuard } from '../security/loggedin.guard';
import { LoginService } from '../security/login/login.service';
import { NotificationService } from './messages/notification.service';
import { OrderService } from '../order/order.service';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent, CommonModule, FormsModule, ReactiveFormsModule]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [LeaveOrderGuard,
                        LoggedInGuard,
                        LoginService,
                        NotificationService,
                        OrderService,
                        RestaurantsService,
                        ShoppingCartService,
                        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
        };
    }
};
