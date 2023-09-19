import { FC } from 'react';
import { GoodsListItemInterface } from '../../interfaces/AllInterfaces';
import { GoodsListItem } from '../GoodsListItem/GoodsListItem';

import classes from './GoodsList.module.css';

interface CatalogProps {
	goods: GoodsListItemInterface[];
}

export const GoodsList: FC<CatalogProps> = ({ goods }) => {
	return (
		<div className={classes.wrapper}>
			{goods?.map((item) => {
				return (
					<GoodsListItem
						key={item.id}
						id={item.id}
						image={item.image}
						name={item.name}
						price={item.price}
					/>
				);
			})}
		</div>
	);
};
