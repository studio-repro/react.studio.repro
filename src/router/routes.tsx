import { action } from 'mobx';
import * as React from 'react';
import { Route, State } from 'router5';

import App from '@containers/App';
import { RouteNames } from '@enums/RouteNames';
import About from '@pages/About';
import Contact from '@pages/Contact';
import Products from '@pages/Products';
import Team from '@pages/Team';
import { RouterStore } from '@store/RouterStore';

export interface LinkData {
	name: string;
	params?: object;
}

export type DoneFn = (err?: any, state?: State) => void;
export type Params = Record<string, any>;

export interface AdvRoute extends Route {
	link: (...args: any[]) => LinkData;
	component: (next?: Params) => any;
	activate?: (store: RouterStore, current?: Params, prev?: State) => void;
	deactivate?: (store: RouterStore, current?: Params, next?: State) => void;
}

export interface Routes {
	[name: string]: AdvRoute;
}

export const routes: Routes = {};

export const AppRoute: AdvRoute = {
	name: RouteNames.HOME,
	path: '/',

	link: () => ({
		name: AppRoute.name
	}),

	component: () => <App />,

	activate: action((store: RouterStore) => {
		store.activatedRouteName(AppRoute.name);
	}),

	deactivate: (store: RouterStore) => {
		store.deActivatedRouteName(AppRoute.name);
	}
};
routes[AppRoute.name] = AppRoute;

export const AboutRoute: AdvRoute = {
	name: RouteNames.ABOUT,
	path: '/about',

	link: () => ({
		name: AboutRoute.name
	}),

	component: () => <About />,

	activate: action((store: RouterStore) => {
		store.activatedRouteName(AboutRoute.name);
	}),

	deactivate: (store: RouterStore) => {
		store.deActivatedRouteName(AboutRoute.name);
	}
};
routes[AboutRoute.name] = AboutRoute;

export const ContactRoute: AdvRoute = {
	name: RouteNames.CONTACT,
	path: '/contact',

	link: () => ({
		name: ContactRoute.name
	}),

	component: () => <Contact />,

	activate: action((store: RouterStore) => {
		store.activatedRouteName(ContactRoute.name);
	}),

	deactivate: (store: RouterStore) => {
		store.deActivatedRouteName(ContactRoute.name);
	}
};
routes[ContactRoute.name] = ContactRoute;

export const ProductsRoute: AdvRoute = {
	name: RouteNames.PRODUCTS,
	path: '/products',

	link: () => ({
		name: ProductsRoute.name
	}),

	component: () => <Products />,

	activate: action((store: RouterStore) => {
		store.activatedRouteName(ProductsRoute.name);
	}),

	deactivate: (store: RouterStore) => {
		store.deActivatedRouteName(ProductsRoute.name);
	}
};
routes[ProductsRoute.name] = ProductsRoute;

export const TeamRoute: AdvRoute = {
	name: RouteNames.TEAM,
	path: '/team',

	link: () => ({
		name: TeamRoute.name
	}),

	component: () => <Team />,

	activate: action((store: RouterStore) => {
		store.activatedRouteName(TeamRoute.name);
	}),

	deactivate: (store: RouterStore) => {
		store.deActivatedRouteName(TeamRoute.name);
	}
};
routes[TeamRoute.name] = TeamRoute;
