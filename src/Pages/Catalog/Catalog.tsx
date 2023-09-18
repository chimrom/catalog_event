import { useState, useEffect } from 'react';

export const Catalog = () => {
	const [goodsList, setGoodsList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		async function getGoodsList() {
            setIsLoading
			try {
			} catch (error) {
				console.log(error);
			}
		}
	}, []);
	return <></>;
};
