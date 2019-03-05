import * as React from 'react';

import ParticleBackground from '@components/ui/ParticleBackground';
import { RouterStore } from '@store/RouterStore';

import { ReactComponent as Spread } from '@assets/images/theme/spread.svg';

import './style.less';

export interface LandingHeadProps {
	routerStore?: RouterStore;
}

const LandingHead = (props: LandingHeadProps) => (
	<section>
		<section className="Landing__Head">
			<div className="Landing__Particles__Container">
				<ParticleBackground />
			</div>
			<section className="Landing__Content">
				<section className="Image__Wrapper">
					<Spread />
				</section>
			</section>
		</section>
	</section>
);

export default LandingHead;
