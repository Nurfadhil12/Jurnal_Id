import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Add_OnsComponent } from './add_ons/add_ons.component';
import { Assets_managementComponent } from './assets_management/assets_management.component';
import { Cash_bankComponent } from './cash_bank/cash_bank.component';
import { Charts_of_accountsComponent } from './chart_of_accounts/charts_of_accounts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { Jurnal_payComponent } from './jurnal_pay/jurnal_pay.component';
import { Other_listsComponent } from './other_lists/other_lists.component';
import { PayrollComponent } from './payroll/payroll.component';
import { ProductsComponent } from './products/products.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { ReportsComponent } from './reports/reports.component';
import { SalesComponent } from './sales/sales.component';
import { SettingsComponent } from './settings/settings.component';
import { Tax_managementComponent } from './tax_management/tax_management.component';

const routes: Routes = [
  { path:'dashboard',component:DashboardComponent},
  { path:'reports',component:ReportsComponent},
  { path:'cash_bank',component:Cash_bankComponent},
  { path:'sales',component:SalesComponent },
  { path:'purchases',component:PurchasesComponent },
  { path:'expenses',component:ExpensesComponent },
  { path:'contacts',component:ContactsComponent },  
  { path:'products',component:ProductsComponent },
  { path:'assets_management',component:Assets_managementComponent },
  { path:'charts_of_accounts',component:Charts_of_accountsComponent },
  { path:'jurnal_pay',component:Jurnal_payComponent },
  { path:'tax_management',component:Tax_managementComponent },
  { path:'payroll',component:PayrollComponent },
  { path:'other_lists',component:Other_listsComponent },
  { path:'add_ons',component:Add_OnsComponent },
  { path:'settings',component:SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
