import logo from '../../assets/shopLogo.png';
import basketIcon from '../../assets/basket.png';
import catalogIcon from '../../assets/catalog.png';
import classes from './Header.module.css';

export const Header = () => {
	return (
		<header className={classes.header}>
			<img src={logo} alt="logo" className={classes.logo} />
			<div className={classes.buttonsNavBlock}>
				<button className={classes.navButton}>
					<img src={catalogIcon} alt="catalog" />
					Каталог
				</button>
				<button className={classes.navButton}>
					<img src={basketIcon} alt="basket" />
					Корзина
				</button>
			</div>
		</header>
	);
};
