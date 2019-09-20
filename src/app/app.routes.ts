import {Routes} from '@angular/router';

import {HomeComponent} from '@src/app/home/home.component';
import {CouchbaseDemoComponent} from '@src/app/couchbase-demo/couchbase-demo.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'couchbase-demo',
        component: CouchbaseDemoComponent,
    },
];
