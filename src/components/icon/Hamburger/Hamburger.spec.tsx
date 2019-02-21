import { mount, shallow } from 'enzyme';
import * as React from 'react';

import Hamburger from './Hamburger';

describe('Hamburger component', () => {
	it('renders', () => {
		const wrapper = shallow(
			<div>
				<Hamburger />
			</div>
		);
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('Hamburger').exists()).toBe(true);
	});

	it('renders snapshot correctly', () => {
		const wrapper = shallow(<Hamburger />);
		expect(wrapper).toMatchSnapshot();
	});

	it('should mount component', () => {
		const wrapper = mount(
			<div>
				<Hamburger />
			</div>
		);

		expect(wrapper.children(Hamburger).length).toEqual(1);
	});
});
