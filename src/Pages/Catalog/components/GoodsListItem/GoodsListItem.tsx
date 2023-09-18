import { FC } from "react";
import { CatalogItemInterface } from "../../../../interfaces/AllInterfaces";

export const GoodsListItem: FC<CatalogItemInterface> = ({
    id,
    image,
    name,
    price,
}) => {
    return (
        <div>
            <div>
                <img src={image} alt={name} />
            </div>
            <div>{name}</div>
            <div>{price}</div>
            <button>в корзину</button>
        </div>
    );
};
