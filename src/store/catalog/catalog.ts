import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IGoodsListItem } from "../../interfaces/AllInterfaces";
import { RootState } from "..";

interface CatalogStateI {
    catalogList: IGoodsListItem[];
    isLoading: boolean;
}

export const getCatalog = createAsyncThunk("catalog/getCatalog", async () => {
    const { data } = await axios.get<[], { data: { items: IGoodsListItem[] } }>(
        "https://appevent.ru/dev/task1/catalog"
    );

    return data.items;
});
const initialState: CatalogStateI = { catalogList: [], isLoading: false };

const catalogSlice = createSlice({
    name: "catalog",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCatalog.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCatalog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.catalogList = action.payload;
            });
    },
});

export const selectCatalogList = (state: RootState) =>
    state.catalog.catalogList;

export const selectCatalogLoad = (state: RootState) => state.catalog.isLoading;

export default catalogSlice.reducer;
