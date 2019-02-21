import * as React from 'react';

import RouterLink from '@components/functional/RouterLink';
import Nav from '@components/structural/Nav';

import { RouteNames } from '@enums/RouteNames';

import './style.less';

export interface SiteNavProps {
	isOpen?: boolean;
	closeNav?: () => void;
}

const SiteNav = (props: SiteNavProps) => (
	<div className={`SiteNav ${props.isOpen ? 'IsOpen' : ''}`} onClick={props.closeNav}>
		<div className="SiteNav__Inner">
			<div className="SiteNav__Start">
				<Nav>
					<RouterLink routeName={RouteNames.PRODUCTS}>
						<span className="SiteNav__Item">Products</span>
					</RouterLink>
					<RouterLink routeName={RouteNames.TEAM}>
						<span className="SiteNav__Item">Team</span>
					</RouterLink>
					<RouterLink routeName={RouteNames.ABOUT}>
						<span className="SiteNav__Item">About</span>
					</RouterLink>
					<RouterLink routeName={RouteNames.CONTACT}>
						<span className="SiteNav__Item">Contact</span>
					</RouterLink>
				</Nav>
			</div>
			<div className="SiteNav__End">
				<Nav>{/* Place navigation items that should appear at the end of here */}</Nav>
			</div>
		</div>
	</div>
);

export default SiteNav;
