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
					<p>Use the toggle to preview the "before" and "after" image</p>
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
