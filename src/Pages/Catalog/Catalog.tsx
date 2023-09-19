import { useState, useEffect } from 'react';
import axios from 'axios';
import { GoodsListItemInterface } from '../../interfaces/AllInterfaces';
import { GoodsList } from '../../Components/GoodsList/GoodsList';

import classes from './Catalog.module.css';

export const Catalog = () => {
	const [goodsList, setGoodsList] = useState<GoodsListItemInterface[] | []>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		async function getGoodsList() {
			setIsLoading(true);
			const response = await axios.get('https://appevent.ru/dev/task1/catalog');
			setGoodsList(response.data.items);
			setIsLoading(false);
			try {
			} catch (error) {
				console.log(error);
			}
		}
		getGoodsList();
	}, []);
	return (
		<main>
			<h1 className={classes.title}>Каталог товаров</h1>
			<GoodsList goods={goodsList} />
		</main>
	);
};
