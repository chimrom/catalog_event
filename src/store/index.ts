import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import catalogReducer from "./catalog/catalog";
import basketReducer from "./basket/basket";

const store = configureStore({
    reducer: { catalog: catalogReducer, basket: basketReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
