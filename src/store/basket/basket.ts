import { createSlice } from "@reduxjs/toolkit";
import { IGoodsListItem } from "../../interfaces/AllInterfaces";
import { RootState } from "../";

const localStorageBasketList = JSON.parse(
    localStorage.getItem("basket") || "[]"
);

const initialState: { basketList: IGoodsListItem[] } = {
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
        deleteOnBasket(state, action) {
            state.basketList = state.basketList.filter(
                (el) => el.id !== action.payload
            );
            localStorage.setItem(
                "basket",
                JSON.stringify(
                    state.basketList.filter((el) => el.id !== action.payload)
                )
            );
        },
    },
});

export const { addToBasket, deleteOnBasket } = basketSlice.actions;

export const selectBasket = (state: RootState) => state.basket.basketList;

export default basketSlice.reducer;
