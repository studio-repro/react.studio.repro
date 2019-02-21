import { observer } from 'mobx-react';
import * as React from 'react';

import Head from '@components/structural/Head';
import Header from '@components/structural/Header';
import Page from '@components/structural/Page';

import './style.less';

export interface AboutProps {
	// Empty
}

interface State {
	// Empty
}

@observer
class About extends React.Component<AboutProps, State> {
	public render() {
		return (
			<Page>
				<Head>
					<title>About</title>
					<meta name="Description" content="About" />
				</Head>
				<Header />
				<section className="About__Main">
					<div className="About__Card">
						<section className="Content__Wrapper">
							<h1 className="placeholder">About</h1>
						</section>
					</div>
				</section>
			</Page>
		);
	}
}

export default About;
