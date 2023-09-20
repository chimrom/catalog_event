import { FC } from "react";
import { BasketListItem } from "../BasketListItem/BasketListItem";
import { IGoodsListItem } from "../../interfaces/AllInterfaces";

import classes from "./BasketList.module.css";

interface IBasketProps {
    goods: IGoodsListItem[];
}
export const BasketList: FC<IBasketProps> = ({ goods }) => {
    return (
        <ul className={classes.list}>
            {!!goods.length ? (
                goods.map((item) => {
                    return (
                        <BasketListItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                        />
                    );
                })
            ) : (
                <p className={classes.notFound}>Корзина пуста</p>
            )}
        </ul>
    );
};
