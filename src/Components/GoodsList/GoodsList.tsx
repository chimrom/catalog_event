import { FC } from 'react';
import { useSelector } from 'react-redux';
import { GoodsListItemInterface } from '../../interfaces/AllInterfaces';
import { GoodsListItem } from '../GoodsListItem/GoodsListItem';

import classes from './GoodsList.module.css';

interface CatalogProps {
	goods: GoodsListItemInterface[];
}

export const GoodsList: FC<CatalogProps> = ({ goods }) => {
	const goodsInBasket = useSelector((state) => state.basket.basketList);

	return (
		<div className={classes.wrapper}>
			{!!goods.length ? (
				<>
					{goods?.map((item) => {
						const isItemInBasket = goodsInBasket.find(
							(el) => el.id === item.id
						);
						return (
							<GoodsListItem
								key={item.id}
								id={item.id}
								image={item.image}
								name={item.name}
								price={item.price}
								isItemInBasket={isItemInBasket}
							/>
						);
					})}
				</>
			) : (
				<>
					<p></p>
					<div className={classes.notFound}>Ничего не найдено...</div>
				</>
			)}
		</div>
	);
};
