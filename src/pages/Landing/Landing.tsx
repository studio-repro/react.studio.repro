import { inject, observer } from 'mobx-react';
import * as React from 'react';

import Footer from '@components/structural/Footer';
import Head from '@components/structural/Head';
import Header from '@components/structural/Header';
import Page from '@components/structural/Page';
import LandingHead from '@components/ui/LandingHead';
import { RouterStore } from '@store/RouterStore';

import WhoWeAre from '@pages/Landing/WhoWeAre';
import WhatWeDo from '@pages/Landing/WhatWeDo';

import './style.less';

export interface LandingProps {
	routerStore?: RouterStore;
	path?: string;
}

@inject('routerStore')
@observer
class Landing extends React.Component<LandingProps> {
	private aboutRef = React.createRef<HTMLDivElement>();
	private showcaseRef = React.createRef<HTMLDivElement>();
	private contactRef = React.createRef<HTMLDivElement>();

	public componentDidUpdate() {
		if (this.props.path) {
			switch (this.props.path) {
				case 'about':
					if (this.aboutRef && this.aboutRef.current) {
						this.aboutRef.current.scrollIntoView();
					}
				case 'showcase':
					if (this.showcaseRef && this.showcaseRef.current) {
						this.showcaseRef.current.scrollIntoView();
					}
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
					<div ref={this.showcaseRef} />
					<div ref={this.contactRef} />
				</section>
				<Footer />
			</Page>
		);
	}
}

export default Landing;
