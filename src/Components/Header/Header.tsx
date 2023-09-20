import { useSelector } from 'react-redux';
import logo from '../../assets/shopLogo.png';
import basketIcon from '../../assets/basket.png';
import catalogIcon from '../../assets/catalog.png';
import { HeaderNavButton } from '../../UI/HeaderNavButton/HeaderNavButton.js';
import classes from './Header.module.css';

export const Header = () => {
	const goodsInBasket = useSelector((state) => state.basket.basketList);
	return (
		<header className={classes.header}>
			<img src={logo} alt="logo" className={classes.logo} />
			<div className={classes.buttonsNavBlock}>
				<HeaderNavButton icon={catalogIcon} text="Catalog" path="/" />
				<HeaderNavButton
					icon={basketIcon}
					text="Basket"
					path="/basket"
					number={goodsInBasket.length}
				/>
			</div>
		</header>
	);
};
