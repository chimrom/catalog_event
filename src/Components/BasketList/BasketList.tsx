import { FC } from 'react';
import { BasketListItem } from '../BasketListItem/BasketListItem';
import { GoodsListItemInterface } from '../../interfaces/AllInterfaces';

import classes from './BasketList.module.css';

interface BasketProps {
	goods: GoodsListItemInterface[];
}
export const BasketList: FC<BasketProps> = ({ goods }) => {
	return (
		<ol className={classes.list}>
			{goods.map((item) => {
				return (
					<BasketListItem
						key={item.id}
						id={item.id}
						name={item.name}
						price={item.price}
					/>
				);
			})}
		</ol>
	);
};
