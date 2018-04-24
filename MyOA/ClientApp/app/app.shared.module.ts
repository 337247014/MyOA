import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { OfficeSuppliesComponent } from './components/office-supplies/office-supplies.component';
import { TeamOfficeSuppliesComponent } from './components/office-supplies/team-office-supplies.component';
import { InventoryComponent } from './components/admin/inventory.component';
import { OrderFormComponent } from './components/admin/order-form.component';
import { OrderHistoryComponent } from './components/admin/order-history.component';
import { ProfileComponent } from './components/account/profile.component';
import { PersonalOrderHistoryComponent } from './components/account/personal-order-history.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/common/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavMenuComponent,
        OfficeSuppliesComponent,
        TeamOfficeSuppliesComponent,
        InventoryComponent,
        OrderFormComponent,
        OrderHistoryComponent,
        ProfileComponent,
        PersonalOrderHistoryComponent,
        CartComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ChartsModule,
        NgbModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'office-supplies', component: OfficeSuppliesComponent },
            { path: 'team-office-supplies', component: TeamOfficeSuppliesComponent },
            { path: 'inventory', component: InventoryComponent },
            { path: 'order-form', component: OrderFormComponent },
            { path: 'order-history', component: OrderHistoryComponent },
            { path: 'user-profile', component: ProfileComponent },
            { path: 'personal-order-history', component: PersonalOrderHistoryComponent },
            { path: 'cart', component: CartComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
