import { h, Component } from 'preact';
import Header from '../components/header';
import { Link } from 'preact-router/match';
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow, deep } from 'preact-render-spy';

import menuLinks from '../components/header/menuLinks';
import style from '../components/header/style.scss';

describe('Initial Test of the Header', () => {
	const context = shallow(<Header />);

	test('Header renders 3 nav items and 1 logo link', () => {
		expect(context.find(<Link />).length).toBe(4);
	});

	test('Header contains correct email', () => {
		expect(context.find(`.${style.header__email}`).text()).toBe(menuLinks.email);
	});

	test('Header contains correct Logo', () => {
		expect(context.find(`.${style.header__name}`).text()).toBe(menuLinks.name);
	});
});
