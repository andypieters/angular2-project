import {Route, provideRouter} from '@angular/router';

import {HomeComponent} from './home';
import { NotFoundComponent } from './not-found'
import {UsersComponent, UserFormComponent} from './users';
import {PostsComponent} from './posts';

var routes: Route[] = [
    {path: 'home', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path: 'users/new', component: UserFormComponent},
    {path: 'users/not-found', component: NotFoundComponent},
    {path: 'users/:id', component: UserFormComponent},
    {path: 'posts', component: PostsComponent},
    {path: '**', redirectTo: '/home'}
];

export const APP_ROUTING = provideRouter(routes);