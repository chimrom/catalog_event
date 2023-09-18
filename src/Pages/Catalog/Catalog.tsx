import { useState, useEffect } from "react";
import axios from "axios";
import { GoodsList } from "./components/GoodsList/GoodsList";
import { CatalogItemInterface } from "../../interfaces/AllInterfaces";

export const Catalog = () => {
    const [goodsList, setGoodsList] = useState<CatalogItemInterface[] | []>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getGoodsList() {
            setIsLoading(true);
            const response = await axios.get(
                "https://appevent.ru/dev/task1/catalog"
            );
            setGoodsList(response.data);
            setIsLoading(false);
            try {
            } catch (error) {
                console.log(error);
            }
        }
    }, []);
    return (
        <>
            <GoodsList goods={goodsList} />
        </>
    );
};
