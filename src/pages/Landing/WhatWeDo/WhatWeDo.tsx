import * as React from 'react';

import RoundButton from '@components/ui/RoundButton';
import RoundIcon from '@components/ui/RoundIcon';

import './style.less';

export interface WhatWeDoProps {
	// Empty
}

class WhatWeDo extends React.Component<WhatWeDoProps> {
	public handleGetInTouchClick = (event: React.FormEvent) => {
		event.preventDefault();
	};

	public render() {
		return (
			<div className="WhatWeDo__Main">
				<div className="WhatWeDo__Content">
					<h1>What We Do</h1>
					<div className="WhatWeDo__List">
						<div className="WhatWeDo__Card">
							<RoundIcon type="svg" icon="retouch" />
							<h4 className="WhatWeDo__Card__Title">Retouching</h4>
						</div>
						<div className="WhatWeDo__Card">
							<RoundIcon type="svg" icon="desktop" />
							<h4 className="WhatWeDo__Card__Title">Desktop Publishing</h4>
						</div>
						<div className="WhatWeDo__Card">
							<RoundIcon type="svg" icon="scanning" />
							<h4 className="WhatWeDo__Card__Title">Scanning</h4>
						</div>
					</div>
					<div className="WhatWeDo__Button__Container">
						<RoundButton
							onClick={this.handleGetInTouchClick}
							text={'get in touch'}
							type={'primary'}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default WhatWeDo;
