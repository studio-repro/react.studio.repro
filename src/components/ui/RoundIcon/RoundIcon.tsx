import * as React from 'react';

import './style.less';

import * as placeholder from '@assets/images/png/icon-placeholder.png';
import { ReactComponent as Desktop } from '@assets/images/svg/icon-desktop.svg';
import { ReactComponent as PlaceHolder } from '@assets/images/svg/icon-placeholder.svg';
import { ReactComponent as Retouch } from '@assets/images/svg/icon-retouch.svg';
import { ReactComponent as Scanning } from '@assets/images/svg/icon-scanning.svg';

export interface RoundIconProps {
	icon?: string;
	type?: 'svg' | 'png';
}

const RoundIcon = (props: RoundIconProps) => {
	let pngIcon: any;
	if (props.type && props.type === 'svg') {
		let SvgIcon: any;
		switch (props.icon) {
			case 'desktop':
				SvgIcon = Desktop;
				break;

			case 'retouch':
				SvgIcon = Retouch;
				break;

			case 'scanning':
				SvgIcon = Scanning;
				break;

			default:
				SvgIcon = PlaceHolder;
				break;
		}

		return (
			<div className="RoundIcon__Main">
				<div className="Oval">
					<SvgIcon className="Image" />
				</div>
			</div>
		);
	} else {
		switch (props.icon) {
			default:
				pngIcon = placeholder;
				break;
		}
	}
	return (
		<div className="RoundIcon__Main">
			<div className="Oval">
				<img src={pngIcon} className="Image" />
			</div>
		</div>
	);
};

export default RoundIcon;
