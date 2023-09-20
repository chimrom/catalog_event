import { useSelector } from 'react-redux';
import { BasketList } from '../../Components/BasketList/BasketList';
import classes from './Basket.module.css';

export const Basket = () => {
	const goods = useSelector((state) => state.basket.basketList);
	const sumGoods = goods.reduce(
		(accumulator, currentValue) => accumulator + currentValue.price,
		0
	);

	return (
		<>
			<h1 className={classes.title}>Корзина</h1>
			<BasketList goods={goods} />
			<h2 className={classes.sum}>Итого {sumGoods.toLocaleString('ru-RU')}</h2>
		</>
	);
};
