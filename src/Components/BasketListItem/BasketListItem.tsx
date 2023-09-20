import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { GoodsListItemInterface } from '../../interfaces/AllInterfaces';
import { deleteOnBasket } from '../../store/basket/basket';
import classes from './BasketListItem.module.css';

type BasketListItem = Omit<GoodsListItemInterface, 'image'>;

export const BasketListItem: FC<BasketListItem> = ({ id, name, price }) => {
	const dispatch = useDispatch();
	const handleDeleteOnBasket = () => {
		dispatch(deleteOnBasket(id));
	};
	return (
		<li className={classes.wrapper}>
			<div>
				<p>{name}</p>
				<p>{price.toLocaleString('ru-RU')}</p>
			</div>
			<button className={classes.button} onClick={handleDeleteOnBasket}>
				Убрать из корзины
			</button>
		</li>
	);
};
