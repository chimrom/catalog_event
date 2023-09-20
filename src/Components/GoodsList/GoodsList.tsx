import { FC } from "react";
import { useSelector } from "react-redux";
import { selectBasket } from "../../store/basket/basket";
import { IGoodsListItem } from "../../interfaces/AllInterfaces";
import { GoodsListItem } from "../GoodsListItem/GoodsListItem";

import classes from "./GoodsList.module.css";

interface ICatalogProps {
    goods: IGoodsListItem[];
}

export const GoodsList: FC<ICatalogProps> = ({ goods }) => {
    const goodsInBasket = useSelector(selectBasket); //достаем стейт корзины из редакса

    return (
        <div className={classes.wrapper}>
            {!!goods.length ? (
                <>
                    {goods?.map((item) => {
                        const isItemInBasket = goodsInBasket.some(
                            (el) => el.id === item.id
                        ); // проверяем товары на наличие в корзине
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
