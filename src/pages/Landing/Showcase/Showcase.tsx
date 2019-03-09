import { Switch } from 'antd';
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

@observer
class Showcase extends React.Component<ShowcaseProps, State> {
	public state: State = {
		isBefore: true
	};

	private imageBefore: ImageSource = {
		large: 'https://res.cloudinary.com/lupinemoon/image/upload/v1552116808/dummy-before.jpg',
		small:
			'https://res.cloudinary.com/lupinemoon/image/upload/c_limit,h_275/v1552116776/dummy-before.jpg',
		alt: 'Before Image'
	};

	private imageAfter: ImageSource = {
		large: 'https://res.cloudinary.com/lupinemoon/image/upload/v1552116808/dummy-after.jpg',
		small:
			'https://res.cloudinary.com/lupinemoon/image/upload/c_limit,h_275/v1552116776/dummy-after.jpg',
		alt: 'After Image'
	};

	public handleGetInTouchClick = (checked: boolean, event: MouseEvent) => {
		if (event) {
			event.preventDefault();
		}
		this.setState({ isBefore: !this.state.isBefore });
	};

	public render() {
		const { isBefore } = this.state;
		const imageSrc: ImageSource = !isBefore ? this.imageAfter : this.imageBefore;
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
						<ImageWrapper className="Showcase__Image" imageSrc={imageSrc} render={true} />
					</section>
				</section>
			</section>
		);
	}
}

export default Showcase;
