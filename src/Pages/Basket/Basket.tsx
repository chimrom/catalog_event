import { useState } from 'react';
import { GoodsList } from '../../Components/GoodsList/GoodsList';
import { GoodsListItemInterface } from '../../interfaces/AllInterfaces';

export const Basket = () => {
	const [goodsList, setGoodsList] = useState<GoodsListItemInterface[] | []>([]);
	return (
		<>
			<GoodsList goods={goodsList} />
		</>
	);
};
