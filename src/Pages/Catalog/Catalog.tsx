import { useEffect } from "react";
import { useSelector } from "react-redux";
import { GoodsList } from "../../Components/GoodsList/GoodsList";
import { useAppDispatch } from "../../store";
import {
    getCatalog,
    selectCatalogList,
    selectCatalogLoad,
} from "../../store/catalog/catalog";

import classes from "./Catalog.module.css";

export const Catalog = () => {
    const dispatch = useAppDispatch();
    const goods = useSelector(selectCatalogList); //достаем список товаров из стора
    const isLoading = useSelector(selectCatalogLoad); //достаем состояние загрузки списка товаров из стора

    useEffect(() => {
        dispatch(getCatalog());
    }, [dispatch]);
    return (
        <main>
            <h1 className={classes.title}>Каталог товаров</h1>
            {isLoading ? (
                <p className={classes.load}>Загрузка...</p>
            ) : (
                <GoodsList goods={goods} />
            )}
        </main>
    );
};
