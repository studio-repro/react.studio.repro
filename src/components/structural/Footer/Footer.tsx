import * as React from 'react';

import RouterLink from '@components/functional/RouterLink';
import Grid from '@components/structural/Grid';
import Nav from '@components/structural/Nav';

import { RouteNames } from '@enums/RouteNames';

import { ReactComponent as IconFacebook } from '@assets/images/svg/icon-fb.svg';
import { ReactComponent as IconTwitter } from '@assets/images/svg/icon-twitter.svg';

import './style.less';

const Footer = () => (
	<footer className="Footer__Main">
		<div className="Footer__Content">
			<div className="Navigation">
				<Grid wrap={true}>
					<div className="Navigation__Column">
						<h5 className="Navigation__Head">Site Navigation</h5>
						<Nav stack={true}>
							<RouterLink routeName={RouteNames.ABOUT}>
								<span className="Navigation__Link">About</span>
							</RouterLink>
							<RouterLink routeName={RouteNames.SHOWCASE}>
								<span className="Navigation__Link">Showcase</span>
							</RouterLink>
							<RouterLink routeName={RouteNames.CONTACT}>
								<span className="Navigation__Link">Contact</span>
							</RouterLink>
						</Nav>
					</div>

					<div className="Navigation__Column">
						<h5 className="Navigation__Head">Legal & Social</h5>
						<Nav stack={true}>
							<RouterLink routeName={RouteNames.HOME}>
								<span className="Navigation__Link">Privacy Policy</span>
							</RouterLink>
							<RouterLink routeName={RouteNames.HOME}>
								<span className="Navigation__Link">Terms & Conditions</span>
							</RouterLink>
							<div className="Social__Button__Container">
								<a
									className="Social Oval"
									title="Facebook"
									href="https://www.facebook.com"
									target="_blank"
								>
									<div className="Social__Icon">
										<IconFacebook width={23} height={20} />
									</div>
								</a>
								<a
									className="Social Oval"
									title="Twitter"
									href="https://www.twitter.com"
									target="_blank"
								>
									<div className="Social__Icon">
										<IconTwitter width={23} height={20} />
									</div>
								</a>
							</div>
						</Nav>
					</div>
				</Grid>
			</div>
			<div className="Copyright">&copy; Studio Reporo 2019. All rights reserved.</div>
		</div>
	</footer>
);

export default Footer;
