import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./add-product/add-product.component";
import { BannerComponent } from "./banner/banner.component";
import { ChildComponent } from "./child/child.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmployShowComponent } from "./employ-show/employ-show.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { MapsComponent } from "./maps/maps.component";
import { ShopCartComponent } from "./shop-cart/shop-cart.component";
import { SignupComponent } from "./signup/signup.component";
import { ThemeComponent } from "./theme/theme.component";

const routes : Routes = [
    {path: '', component: BannerComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'addProduct', component: AddProductComponent},
    {path: 'employ', component: EmployShowComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'theme', component: ThemeComponent},
    {path: 'maps', component: MapsComponent},
    // {path: 'charts', component: ChartsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}

export const myRoutes = [
    LoginPageComponent,
    SignupComponent,
    AddProductComponent,
    BannerComponent,
    ShopCartComponent,
    EmployShowComponent,
    DashboardComponent,
    ThemeComponent,
    MapsComponent,
    ChildComponent
]