import { Switch } from 'antd';
import { observer } from 'mobx-react';
import * as React from 'react';

import * as afterImage from '@assets/images/jpg/dummy-after.jpg';
import * as beforeImage from '@assets/images/jpg/dummy-before.jpg';

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
		const jpgImage: any = this.state.isBefore ? beforeImage : afterImage;
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
						<img className="Showcase__Image" src={jpgImage} />
					</section>
				</section>
			</section>
		);
	}
}

export default Showcase;
