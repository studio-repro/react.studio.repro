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
							<p className="WhatWeDo__Card__Desc">
								&bull; Photo Editing &bull; Colour Correction &bull; Deep-etching &bull; Bleed
								Extension &bull; Compositions &bull; Cover ups &bull; Merges &bull; Removal
							</p>
						</div>
						<div className="WhatWeDo__Card">
							<RoundIcon type="svg" icon="desktop" />
							<h4 className="WhatWeDo__Card__Title">Desktop Publishing</h4>
							<p className="WhatWeDo__Card__Desc">
								&bull; Linking Hi-Res Images &bull; Colour Management &bull; Prepress Editing &bull;
								Preflighting &amp; PDF creation &bull; Advert Preflighting &bull; Binders &amp;
								Ebooks
							</p>
						</div>
						<div className="WhatWeDo__Card">
							<RoundIcon type="svg" icon="scanning" />
							<h4 className="WhatWeDo__Card__Title">Scanning &amp; Production</h4>
							<p className="WhatWeDo__Card__Desc">
								&bull; Artwork &bull; Photos &bull; Transparencies &bull; Folio changes &bull; Final
								PDF creation &bull; Uploads &bull; Backups
							</p>
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
