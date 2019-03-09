import classnames from 'classnames';
import * as React from 'react';
import * as ReactCache from 'react-cache';

import { ImageSource } from '@models/ImageSource';

import './style.less';

const ImageResource = ReactCache.unstable_createResource(
	(src: string) =>
		new Promise((resolve) => {
			const img = new Image();
			img.src = src;
			img.onload = resolve;
		})
);

const Img = ({ src, alt, ...props }: { src: any; alt: any }) => {
	ImageResource.read(src);
	return <img src={src} alt={alt} {...props} />;
};

export interface ImageWrapperProps {
	className?: string;
	imageSrc: ImageSource;
	render: boolean;
}

const ImageWrapper = (props: ImageWrapperProps) =>
	props.render ? (
		<section className={classnames('Image__Container', props.className ? props.className : '')}>
			<React.Suspense
				fallback={
					<section className="Image__Container">
						<img className="Image__Blur" src={props.imageSrc.small} alt={props.imageSrc.alt} />
					</section>
				}
			>
				<section className="Image__Container">
					<Img src={props.imageSrc.large} alt={props.imageSrc.alt} />
				</section>
			</React.Suspense>
		</section>
	) : (
		<section />
	);

export default ImageWrapper;
