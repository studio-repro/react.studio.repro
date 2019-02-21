import { observer } from 'mobx-react';
import * as React from 'react';

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
			<section className="About__Main">
				<section className="Content__Wrapper">
					<h1>Who We Are</h1>
					<p>
						<span>
							We’re a small team with a passion for Retouching and DTP. Specialising
							<br />
							in the Magazine and Books field, we have over 30 years exprerience between
							<br />
							us, so we know how to get your titles ready to hit the press.
						</span>
					</p>
				</section>
			</section>
		);
	}
}

export default About;
