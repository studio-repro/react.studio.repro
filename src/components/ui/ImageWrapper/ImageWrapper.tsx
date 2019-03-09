import classnames from 'classnames';
import * as React from 'react';

import { ImageSource } from '@models/ImageSource';

import './style.less';

const Img = ({ src, alt, className, ...props }: { src: any; alt: any; className?: string }) => {
	return <img className={classnames(className ? className : '')} src={src} alt={alt} {...props} />;
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
