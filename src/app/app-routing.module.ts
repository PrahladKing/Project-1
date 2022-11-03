import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./add-product/add-product.component";
import { BannerComponent } from "./banner/banner.component";
import { EmployShowComponent } from "./employ-show/employ-show.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { ShopCartComponent } from "./shop-cart/shop-cart.component";
import { SignupComponent } from "./signup/signup.component";

const routes : Routes = [
    {path: '', component: BannerComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'addProduct', component: AddProductComponent},
    {path: 'employ', component: EmployShowComponent}
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
    EmployShowComponent
]