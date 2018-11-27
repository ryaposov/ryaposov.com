import { h } from 'preact';
import { Link } from 'preact-router';
import style from './style.scss';
import menuLinks from '../header/menuLinks';

let footer = menuLinks;

const Footer = () => (
	<footer class={style.footer}>
		<div class={`${style.footer__center} center`}>
			<Link class={style.footer__logo} href="/">
				<img src="/assets/img/logo-black.svg" alt="" />
			</Link>
			<nav class={style.footer__nav}>
				{ footer.nav.map(link => (
					<Link
						class={style.footer__link}
						activeClassName={style.footer__link_active}
						href={link.link}
					>
						{link.name}
					</Link>
				)) }
			</nav>
			<span class={style.footer__email}>{footer.email}</span>
		</div>
		<!-- Yandex.Metrika counter --> <script type="text/javascript" > (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter51317566 = new Ya.Metrika2({ id:51317566, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/tag.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks2"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/51317566" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->
	</footer>
);

export default Footer;
