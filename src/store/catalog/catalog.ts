import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GoodsListItemInterface } from "../../interfaces/AllInterfaces";

interface CatalogStateI {
    catalogList: GoodsListItemInterface[];
    isLoading: boolean;
}

export const getCatalog = createAsyncThunk("catalog/getCatalog", async () => {
    const { data } = await axios.get<
        [],
        { data: { items: GoodsListItemInterface[] } }
    >("https://appevent.ru/dev/task1/catalog");

    return data.items;
});
const initialState: CatalogStateI = { catalogList: [], isLoading: false };

const catalogSlice = createSlice({
    name: "catalog",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCatalog.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getCatalog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.catalogList = action.payload;
            });
    },
});

export default catalogSlice.reducer;
