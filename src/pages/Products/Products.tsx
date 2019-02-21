import { observer } from 'mobx-react';
import * as React from 'react';

import Head from '@components/structural/Head';
import Header from '@components/structural/Header';
import Page from '@components/structural/Page';

import './style.less';

export interface ProductsProps {
	// Empty
}

interface State {
	// Empty
}

@observer
class Products extends React.Component<ProductsProps, State> {
	public render() {
		return (
			<Page>
				<Head>
					<title>Products</title>
					<meta name="Description" content="Products" />
				</Head>
				<Header />
				<section className="Products__Main">
					<div className="Products__Card">
						<section className="Content__Wrapper">
							<h1 className="placeholder">Products</h1>
						</section>
					</div>
				</section>
			</Page>
		);
	}
}

export default Products;
