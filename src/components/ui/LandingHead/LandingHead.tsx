import * as React from 'react';

import Logo from '@components/icon/Logo';
import ParticleBackground from '@components/ui/ParticleBackground';
import { RouterStore } from '@store/RouterStore';

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
			<section className="Image__Wrapper">
				<Logo />
			</section>
			<section className="Content__Wrapper">
				<h1>Studio Repro</h1>
				<p>
					<span>Retouching & DTP Specialists</span>
				</p>
			</section>
		</section>
	</section>
);

export default LandingHead;
