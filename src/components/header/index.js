import { h } from 'preact';
import { connect } from 'preact-redux';
import { Link } from 'react-router-dom';
import style from './style.scss';

const Header = ({ header }) => (
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

const mapStateToProps = (state) => ({ header: state.header });

export default connect(mapStateToProps)(Header);
