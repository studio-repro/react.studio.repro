import { Switch } from 'antd';
import classnames from 'classnames';
import { observer } from 'mobx-react';
import * as React from 'react';

import ImageWrapper from '@components/ui/ImageWrapper';
import { ImageSource } from '@models/ImageSource';

import './style.less';

export interface ShowcaseProps {
	// Empty
}

interface State {
	isBefore: boolean;
}

interface ImageItem {
	before: ImageSource;
	after: ImageSource;
}

const imageItem: ImageItem = {
	before: {
		large: 'https://res.cloudinary.com/lupinemoon/image/upload/v1552116808/dummy-before.jpg',
		small:
			'https://res.cloudinary.com/lupinemoon/image/upload/c_limit,h_275/v1552116776/dummy-before.jpg',
		alt: 'Before Image'
	},
	after: {
		large: 'https://res.cloudinary.com/lupinemoon/image/upload/v1552116808/dummy-after.jpg',
		small:
			'https://res.cloudinary.com/lupinemoon/image/upload/c_limit,h_275/v1552116776/dummy-after.jpg',
		alt: 'After Image'
	}
};

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
						<ImageWrapper
							className={classnames('Showcase__Image', 'Absolute', !isBefore ? 'Hidden' : '')}
							imageSrc={imageItem.before}
							render={true}
						/>
						<ImageWrapper
							className={classnames('Showcase__Image', 'Absolute', isBefore ? 'Hidden' : '')}
							imageSrc={imageItem.after}
							render={true}
						/>
						<img className="Showcase__Image" src={imageItem.before.small} />
					</section>
				</section>
			</section>
		);
	}
}

export default Showcase;
