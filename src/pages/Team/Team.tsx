import { observer } from 'mobx-react';
import * as React from 'react';

import Head from '@components/structural/Head';
import Header from '@components/structural/Header';
import Page from '@components/structural/Page';

import './style.less';

export interface TeamProps {
	// Empty
}

interface State {
	// Empty
}

@observer
class Team extends React.Component<TeamProps, State> {
	public render() {
		return (
			<Page>
				<Head>
					<title>Team</title>
					<meta name="Description" content="Team" />
				</Head>
				<Header />
				<section className="Team__Main">
					<div className="Team__Card">
						<section className="Content__Wrapper">
							<h1 className="placeholder">Team</h1>
						</section>
					</div>
				</section>
			</Page>
		);
	}
}

export default Team;
