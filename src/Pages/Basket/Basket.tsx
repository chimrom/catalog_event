import { useSelector } from "react-redux";
import { BasketList } from "../../Components/BasketList/BasketList";
import { selectBasket } from "../../store/basket/basket";
import classes from "./Basket.module.css";

export const Basket = () => {
    const goods = useSelector(selectBasket); //достаем стейт корзины из редакса
    const sumGoods = goods.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
    ); // общая сумма всех товаров в корзине

    return (
        <>
            <h1 className={classes.title}>Корзина</h1>
            <BasketList goods={goods} />
            <h2 className={classes.sum}>
                Итого {sumGoods.toLocaleString("ru-RU")}
            </h2>
        </>
    );
};
