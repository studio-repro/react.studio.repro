import { observer } from 'mobx-react';
import * as React from 'react';

import RoundButton from '@components/ui/RoundButton';
import * as Constants from '@utils/constants';

import './style.less';

export interface ContactProps {
	// Empty
}

interface State {
	// Empty
}

@observer
class Contact extends React.Component<ContactProps, State> {
	public handleGetInTouchClick = (event: React.MouseEvent) => {
		if (event) {
			event.preventDefault();
		}
		window.location.href = 'mailto:' + Constants.infoEmailAddress;
	};

	public render() {
		return (
			<section className="Contact__Main">
				<section className="Content__Wrapper">
					<h1>Contact Us</h1>
					<p>
						<span>
							We would love to hear from you! Send us an email, and will respond as soon as
							possible.
						</span>
					</p>
					<div className="Contact__Button__Container">
						<RoundButton onClick={this.handleGetInTouchClick} text={'email us'} type={'primary'} />
					</div>
				</section>
			</section>
		);
	}
}

export default Contact;
