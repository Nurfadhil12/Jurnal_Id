import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { Cash_bankComponent } from './cash_bank/cash_bank.component';
import { SalesComponent } from './sales/sales.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProductsComponent } from './products/products.component';
import { Assets_managementComponent } from './assets_management/assets_management.component';
import { Charts_of_accountsComponent } from './chart_of_accounts/charts_of_accounts.component';
import { Jurnal_payComponent } from './jurnal_pay/jurnal_pay.component';
import { Tax_managementComponent } from './tax_management/tax_management.component';
import { PayrollComponent } from './payroll/payroll.component';
import { Other_listsComponent } from './other_lists/other_lists.component';
import { Add_OnsComponent } from './add_ons/add_ons.component';
import { SettingsComponent } from './settings/settings.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    ReportsComponent,
    Cash_bankComponent,
    SalesComponent,
    PurchasesComponent,
    ExpensesComponent,
    ContactsComponent,
    ProductsComponent,
    Assets_managementComponent,
    Charts_of_accountsComponent,
    Jurnal_payComponent,
    Tax_managementComponent,
    PayrollComponent,
    Other_listsComponent,
    Add_OnsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatSelectModule,MatBadgeModule
    ,MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
