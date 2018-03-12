import { h } from 'preact';
import { Link } from 'preact-router';
import style from './style.scss';
import menuLinks from './menuLinks';

let header = menuLinks;

const Header = () => (
	<header class={style.header}>
		<div class={`${style.header__center} center`}>
			<Link class={style.header__name} href="/">{header.name}</Link>
			<nav class={style.header__nav}>
				{ header.nav.map(link => (
					<Link class={style.header__link} activeClassName={style.header__link_active} href={link.link}>{link.name}</Link>
				)) }
			</nav>
			<span class={style.header__email}>{header.email}</span>
		</div>
	</header>
);

export default Header;
