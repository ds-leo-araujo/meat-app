import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { OrderComponent } from './order.component';
import { OrderItemsComponent } from './order-items/order-items.component';

import { LeaveOrderGuard } from './leave-order.guard';

import { SharedModule } from '../shared/shared.module';

const ROUTES: Routes = [
    { path: '', component: OrderComponent, canDeactivate: [LeaveOrderGuard]}
];

@NgModule({
    declarations: [OrderComponent, OrderItemsComponent, DeliveryCostsComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class OrderModule {};
