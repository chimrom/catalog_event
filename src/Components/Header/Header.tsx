import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../assets/shopLogo.png";
import basketIcon from "../../assets/basket.png";
import catalogIcon from "../../assets/catalog.png";
import { HeaderNavButton } from "../../UI/HeaderNavButton/HeaderNavButton.js";
import { selectBasket } from "../../store/basket/basket";
import classes from "./Header.module.css";

export const Header = () => {
    const goodsInBasket = useSelector(selectBasket); //достаем стейт корзины из редакса
    return (
        <header className={classes.header}>
            <NavLink to="/">
                <img src={logo} alt="logo" className={classes.logo} />
            </NavLink>
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
