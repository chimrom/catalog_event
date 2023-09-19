import { FC } from 'react';
import { GoodsListItemInterface } from '../../interfaces/AllInterfaces';

import classes from './GoodsListItem.module.css';

export const GoodsListItem: FC<GoodsListItemInterface> = ({
	id,
	image,
	name,
	price,
}) => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.cardImg}>
				<img src={image} alt={name} />
			</div>
			<div className={classes.name}>{name}</div>
			<div className={classes.price}>{price.toLocaleString('ru-RU')}</div>
			<button className={classes.button}>в корзину</button>
		</div>
	);
};
