import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './components/public/public.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { StoriesComponent } from './components/stories/stories.component';
import { MarketComponent } from './components/market/market.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PeopleComponent } from './components/people/people.component';

const routes: Routes = [
        {
            path: 'public',
            component: PublicComponent
        },
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'profile/:id',
            component: ProfileComponent
        },
        {
            path: 'entertainment/:id',
            component: EntertainmentComponent
        },
        {
            path: 'stories/:id',
            component: StoriesComponent
        },
        {
            path: 'market/:id',
            component: MarketComponent
        },
        {
            path: 'checkout/:id',
            component: CheckoutComponent
        },
        {
            path: 'people/:id',
            component: PeopleComponent
        }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
