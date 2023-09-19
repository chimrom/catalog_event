import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./catalog/catalog";
import basketReducer from "./basket/basket";

export default configureStore({
    reducer: { catalog: catalogReducer, basket: basketReducer },
});
