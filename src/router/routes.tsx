import { action } from 'mobx';
import * as React from 'react';
import { Route, State } from 'router5';

import App from '@containers/App';
import { RouteNames } from '@enums/RouteNames';
import Landing from '@pages/Landing';
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

export const ShowCaseRoute: AdvRoute = {
	name: RouteNames.SHOWCASE,
	path: '/showcase',

	link: () => ({
		name: ShowCaseRoute.name
	}),

	component: () => <Landing />,

	activate: action((store: RouterStore) => {
		store.activatedRouteName(ShowCaseRoute.name);
	}),

	deactivate: (store: RouterStore) => {
		store.deActivatedRouteName(ShowCaseRoute.name);
	}
};
routes[ShowCaseRoute.name] = ShowCaseRoute;

export const AboutRoute: AdvRoute = {
	name: RouteNames.ABOUT,
	path: '/about',

	link: () => ({
		name: AboutRoute.name
	}),

	component: () => <Landing />,

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

	component: () => <Landing />,

	activate: action((store: RouterStore) => {
		store.activatedRouteName(ContactRoute.name);
	}),

	deactivate: (store: RouterStore) => {
		store.deActivatedRouteName(ContactRoute.name);
	}
};
routes[ContactRoute.name] = ContactRoute;
