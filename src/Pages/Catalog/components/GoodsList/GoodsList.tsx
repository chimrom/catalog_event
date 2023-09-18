import { FC } from "react";
import { CatalogItemInterface } from "../../../../interfaces/AllInterfaces";
import { GoodsListItem } from "../GoodsListItem/GoodsListItem";

export const GoodsList: FC<CatalogItemInterface[] | []> = ({ goods }) => {
    return (
        <div>
            {goods?.map((item) => {
                return (
                    <GoodsListItem
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                );
            })}
        </div>
    );
};
