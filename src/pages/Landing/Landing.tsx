import { inject, observer } from 'mobx-react';
import * as React from 'react';

import Footer from '@components/structural/Footer';
import Head from '@components/structural/Head';
import Header from '@components/structural/Header';
import Page from '@components/structural/Page';
import LandingHead from '@components/ui/LandingHead';
import { RouterStore } from '@store/RouterStore';

import Showcase from '@pages/Landing/Showcase';
import WhatWeDo from '@pages/Landing/WhatWeDo';
import WhoWeAre from '@pages/Landing/WhoWeAre';

import './style.less';

export interface LandingProps {
	routerStore?: RouterStore;
	path?: string;
	home?: boolean;
	refresh?: boolean;
}

@inject('routerStore')
@observer
class Landing extends React.Component<LandingProps> {
	private aboutRef = React.createRef<HTMLDivElement>();
	private showcaseRef = React.createRef<HTMLDivElement>();
	private contactRef = React.createRef<HTMLDivElement>();

	public componentDidUpdate() {
		this.scrollToElement();
	}

	private scrollToElement() {
		if (this.props.home) {
			window.scrollTo(0, 0);
		} else if (this.props.path) {
			switch (this.props.path) {
				case 'about':
					if (this.aboutRef && this.aboutRef.current) {
						this.aboutRef.current.scrollIntoView();
					}
					break;

				case 'showcase':
					if (this.showcaseRef && this.showcaseRef.current) {
						this.showcaseRef.current.scrollIntoView();
					}
					break;

				case 'contact':
					if (this.contactRef && this.contactRef.current) {
						this.contactRef.current.scrollIntoView();
					}
					break;
			}
		}
	}

	public render() {
		return (
			<Page>
				<Head>
					<title>Home</title>
					<meta name="Description" content="Home" />
				</Head>
				<Header />
				<section className="Landing__Main">
					<LandingHead routerStore={this.props.routerStore} />
					<div ref={this.aboutRef}>
						<WhoWeAre />
						<WhatWeDo />
					</div>
					<div ref={this.showcaseRef}>
						<Showcase />
					</div>
					<div ref={this.contactRef} />
				</section>
				<Footer />
			</Page>
		);
	}
}

export default Landing;
