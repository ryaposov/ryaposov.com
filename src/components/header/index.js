import { h } from 'preact';
import { Link } from 'react-router-dom';
import style from './style.scss';

let header = {
	name: 'Pavel Ryaposov',
	email: 'p.ryaposov@gmail.com',
	nav: [
		{
			name: 'Development',
			link: '/development/'
		},
		{
			name: 'Design',
			link: '/design/'
		},
		{
			name: 'Blog',
			link: '/blog/'
		}
	]
};

const Header = () => (
	<header class={style.header}>
		<div class={`${style.header__center} center`}>
			<Link class={style.header__name} to="/">{header.name}</Link>
			<nav class={style.header__nav}>
				{ header.nav.map(link => (
					<Link class={style.header__link} activeClassName={style.header__link_active} to={link.link}>{link.name}</Link>
				)) }
			</nav>
			<span class={style.header__email}>{header.email}</span>
		</div>
	</header>
);

export default Header;
