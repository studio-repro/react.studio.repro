import * as React from 'react';

import Button from '@bit/nicolaspearson.interaction.button';

import Logo from '@components/icon/Logo';
import ParticleBackground from '@components/ui/ParticleBackground';
import { RouteNames } from '@enums/RouteNames';
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
					<span>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum sit amet
						libero eu facilisis.
					</span>
				</p>
				<section className="Content__Wrapper__Buttons">
					<Button
						className="Read__More__Button"
						onClick={() => {
							if (props.routerStore) {
								const { router } = props.routerStore;
								router.navigate(RouteNames.PRODUCTS);
							}
						}}
					>
						Read More
					</Button>
				</section>
			</section>
		</section>
	</section>
);

export default LandingHead;
