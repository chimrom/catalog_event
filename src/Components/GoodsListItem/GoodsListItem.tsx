import { FC } from "react";
import { useDispatch } from "react-redux";
import { GoodsListItemInterface } from "../../interfaces/AllInterfaces";
import { addToBasket } from "../../store/basket/basket";

import classes from "./GoodsListItem.module.css";

export const GoodsListItem: FC<GoodsListItemInterface> = ({
    id,
    image,
    name,
    price,
}) => {
    const dispatch = useDispatch();
    const handleAddToBasket = () => {
        dispatch(addToBasket({ id, image, name, price }));
    };
    return (
        <div className={classes.wrapper}>
            <div className={classes.cardImg}>
                <img src={image} alt={name} />
            </div>
            <div className={classes.name}>{name}</div>
            <div className={classes.price}>{price.toLocaleString("ru-RU")}</div>
            <button className={classes.button} onClick={handleAddToBasket}>
                в корзину
            </button>
        </div>
    );
};
