import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

import { OfficeSuppliesComponent } from './components/office-supplies/office-supplies.component';
import { TeamOfficeSuppliesComponent } from './components/office-supplies/team-office-supplies.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/common/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        OfficeSuppliesComponent,
        TeamOfficeSuppliesComponent,
        CartComponent,
        FooterComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'office-supplies', component: OfficeSuppliesComponent },
            { path: 'team-office-supplies', component: TeamOfficeSuppliesComponent },
            { path: 'cart', component: CartComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
