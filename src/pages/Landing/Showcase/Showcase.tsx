import { Switch } from 'antd';
import { observer } from 'mobx-react';
import * as React from 'react';

import './style.less';

export interface ShowcaseProps {
	// Empty
}

interface State {
	isBefore: boolean;
}

@observer
class Showcase extends React.Component<ShowcaseProps, State> {
	public state: State = {
		isBefore: true
	};

	public handleGetInTouchClick = (checked: boolean, event: MouseEvent) => {
		if (event) {
			event.preventDefault();
		}
		this.setState({ isBefore: !this.state.isBefore });
	};

	public render() {
		const { isBefore } = this.state;
		const imageSrc = !isBefore
			? 'https://res.cloudinary.com/lupinemoon/image/upload/v1552116776/dummy-after.jpg'
			: 'https://res.cloudinary.com/lupinemoon/image/upload/v1552116808/dummy-before.jpg';
		return (
			<section className="Showcase__Main">
				<section className="Content__Wrapper">
					<h1>Showcase</h1>
					<p>Use the toggle to preview the "before" and "after" image</p>
					<div className="Showcase__Button__Container">
						<Switch
							checkedChildren="After"
							unCheckedChildren="Before"
							onClick={this.handleGetInTouchClick}
						/>
					</div>
					<section className="Showcase__Image__Container">
						<img className="Showcase__Image" src={imageSrc} />
					</section>
				</section>
			</section>
		);
	}
}

export default Showcase;
