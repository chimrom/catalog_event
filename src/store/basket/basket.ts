import { createSlice } from "@reduxjs/toolkit";
import { GoodsListItemInterface } from "../../interfaces/AllInterfaces";

const localStorageBasketList = JSON.parse(
    localStorage.getItem("basket") || "[]"
);

const initialState: { basketList: GoodsListItemInterface[] } = {
    basketList: localStorageBasketList,
};

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket(state, action) {
            const isItemInBasket = state.basketList.find(
                (el) => el.id === action.payload.id
            );
            if (!isItemInBasket) {
                state.basketList.push(action.payload);

                localStorage.setItem(
                    "basket",
                    JSON.stringify(state.basketList || [])
                );
            }
        },
    },
});

export const { addToBasket } = basketSlice.actions;

export default basketSlice.reducer;
