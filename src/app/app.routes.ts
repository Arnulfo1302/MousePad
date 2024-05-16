import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ItemViewComponent } from './components/item-view/item-view.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { RightContentComponent } from './components/right-content/right-content.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { PaymentComponent } from './components/payment/payment.component';
export const routes: Routes = [
    {path: 'item-view/:id', component: ItemViewComponent},
    {path: 'main-content', component: MainContentComponent},
    {path: '', redirectTo: '/home',pathMatch: 'full'},
    {path: 'home', component: RightContentComponent},
    {path: 'benefits', component: BenefitsComponent},
    {path: 'payment', component: PaymentComponent}
];
