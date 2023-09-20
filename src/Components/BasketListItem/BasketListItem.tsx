import { FC } from "react";
import { useDispatch } from "react-redux";
import { IGoodsListItem } from "../../interfaces/AllInterfaces";
import { deleteOnBasket } from "../../store/basket/basket";
import classes from "./BasketListItem.module.css";

type BasketListItem = Omit<IGoodsListItem, "image">;

export const BasketListItem: FC<BasketListItem> = ({ id, name, price }) => {
    const dispatch = useDispatch();
    const handleDeleteOnBasket = () => {
        dispatch(deleteOnBasket(id));
    }; // удаляем из стора по id
    return (
        <li className={classes.wrapper}>
            <div>
                <p>{name}</p>
                <p>{price.toLocaleString("ru-RU")}</p>
            </div>
            <button className={classes.button} onClick={handleDeleteOnBasket}>
                Убрать из корзины
            </button>
        </li>
    );
};
