import { h } from 'preact';
import { Link } from 'react-router-dom';
import style from './style.scss';
import menuLinks from '../header/menuLinks';

let footer = menuLinks;

const Footer = () => (
	<footer class={style.footer}>
		<div class={`${style.footer__center} center`}>
			<Link class={style.footer__logo} to="/">
				<img src="/assets/img/logo-black.svg" />
			</Link>
			<nav class={style.footer__nav}>
				{ footer.nav.map(link => (
					<Link class={style.footer__link} activeClassName={style.footer__link_active} to={link.link}>{link.name}</Link>
				)) }
			</nav>
			<span class={style.footer__email}>{footer.email}</span>
		</div>
	</footer>
);

export default Footer;
