import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IGoodsListItem } from "../../interfaces/AllInterfaces";
import { addToBasket } from "../../store/basket/basket";
import { ListItemButton } from "../../UI/ListItemButton/ListItemButton";

import classes from "./GoodsListItem.module.css";

interface ListItemI extends IGoodsListItem {
    isItemInBasket: boolean;
}

export const GoodsListItem: FC<ListItemI> = ({
    id,
    image,
    name,
    price,
    isItemInBasket,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToBasket = () => {
        dispatch(addToBasket({ id, image, name, price }));
    }; //добавляем объект в стор корзины

    return (
        <div className={classes.wrapper}>
            <div className={classes.cardImg}>
                <img src={image} alt={name} />
            </div>
            <div className={classes.name}>{name}</div>
            <div className={classes.price}>{price.toLocaleString("ru-RU")}</div>
            {isItemInBasket ? (
                <ListItemButton
                    text="Оформить заказ"
                    onClick={() => navigate("/basket")}
                />
            ) : (
                <ListItemButton
                    text="Добавить в корзину"
                    onClick={handleAddToBasket}
                />
            )}
        </div>
    );
};
