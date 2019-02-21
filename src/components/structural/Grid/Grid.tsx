import * as React from 'react';

import './style.less';

export interface GridProps {
	children?: any;
	wrap?: any;
}

const Grid = (props: GridProps) => (
	<div className={`Grid ${props.wrap ? 'Grid__Wrap' : ''} `}>{props.children}</div>
);

export default Grid;
