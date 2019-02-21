import * as React from 'react';
import Particles from 'react-particles-js';

import './style.less';

export interface ParticleBackgroundProps {
	// Empty
}

const ParticleBackground = (props: ParticleBackgroundProps) => (
	<Particles
		className="ParticleBackground__Main"
		params={{
			particles: {
				number: {
					value: 120,
					density: {
						enable: true,
						value_area: 1200
					}
				},
				color: {
					value: '#d6d6d6'
				},
				shape: {
					type: 'circle',
					stroke: {
						width: 0,
						color: '#000000'
					},
					polygon: {
						nb_sides: 5
					}
				},
				opacity: {
					value: 1,
					random: true,
					anim: {
						enable: true,
						speed: 1,
						opacity_min: 0,
						sync: false
					}
				},
				size: {
					value: 2,
					random: true,
					anim: {
						enable: false,
						speed: 6,
						size_min: 0.3,
						sync: false
					}
				},
				line_linked: {
					enable: true,
					distance: 150,
					color: '#303841',
					opacity: 0.4,
					width: 1
				},
				move: {
					enable: true,
					speed: 2,
					direction: 'none',
					random: true,
					straight: false,
					out_mode: 'out',
					bounce: false,
					attract: {
						enable: false,
						rotateX: 600,
						rotateY: 600
					}
				}
			},
			interactivity: {
				detect_on: 'canvas',
				events: {
					onhover: {
						enable: false,
						mode: 'repulse'
					},
					onclick: {
						enable: true,
						mode: 'push'
					},
					resize: true
				},
				modes: {
					grab: {
						distance: 400,
						line_linked: {
							opacity: 1
						}
					},
					bubble: {
						distance: 400,
						size: 40,
						duration: 2
					},
					repulse: {
						distance: 200,
						duration: 0.4
					},
					push: {
						particles_nb: 4
					},
					remove: {
						particles_nb: 2
					}
				}
			}
		}}
	/>
);

export default ParticleBackground;
