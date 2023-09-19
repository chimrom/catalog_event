import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoodsList } from "../../Components/GoodsList/GoodsList";
import { GoodsListItemInterface } from "../../interfaces/AllInterfaces";

export const Basket = () => {
    const dispatch = useDispatch();
    const goods = useSelector((state) => state.basket.basketList);

    // const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <GoodsList goods={goods} />
        </>
    );
};
