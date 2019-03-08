import { observer } from 'mobx-react';
import * as React from 'react';

import RoundButton from '@components/ui/RoundButton';

import './style.less';

export interface ShowcaseProps {
	// Empty
}

interface State {
	// Empty
}

@observer
class Showcase extends React.Component<ShowcaseProps, State> {
	public handleGetInTouchClick = (event: React.FormEvent) => {
		event.preventDefault();
	};

	public render() {
		return (
			<section className="Showcase__Main">
				<section className="Content__Wrapper">
					<h1>Showcase</h1>
					<p>
						<span>
							We’re a small team with a passion for Retouching and DTP. Specialising
							<br />
							in the Magazine and Books field, we have over 30 years exprerience between
							<br />
							us, so we know how to get your titles ready to hit the press.
						</span>
					</p>
					<div className="Showcase__Button__Container">
						<RoundButton
							onClick={this.handleGetInTouchClick}
							text={'get in touch'}
							type={'primary'}
						/>
					</div>
				</section>
			</section>
		);
	}
}

export default Showcase;
