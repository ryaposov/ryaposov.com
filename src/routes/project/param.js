import { h } from 'preact';
import style from './style.scss';

const Param = ({ param }) => (
	<div class={style.project__param}>
		<span class={style.project__label}>{param.label}</span>
		<span class={style.project__value}>{param.value}</span>
	</div>
);

export default Param;
