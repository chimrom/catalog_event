import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoodsList } from "../../Components/GoodsList/GoodsList";
import { getCatalog } from "../../store/catalog/catalog";

import classes from "./Catalog.module.css";

export const Catalog = () => {
    const dispatch = useDispatch();
    const goods = useSelector((state) => state.catalog.catalogList);
    const isLoading = useSelector((state) => state.catalog.isLoading);

    // const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        dispatch(getCatalog());
    }, [dispatch]);
    return (
        <main>
            <h1 className={classes.title}>Каталог товаров</h1>
            <GoodsList goods={goods} />
        </main>
    );
};
