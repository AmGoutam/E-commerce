import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchAllProducts, { fetchAllProductsByFilters } from "./ProductListAPI";

const initialState = {
    products: [],
    status: "idle" // Changed from "goutam" to "idle"
};

export const fetchAllProductsAsync = createAsyncThunk(
    'product/fetchAllProducts',
    async () => {
        const response = await fetchAllProducts();
        return response.data;
    }
);


export const fetchAllProductsByFiltersAsync = createAsyncThunk(
    'product/fetchAllProductsByFilters',
    async (filter) => {
        const response = await fetchAllProductsByFilters(filter);
        console.log("response",response)
        return response.data;
    }
);

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProductsAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.products = action.payload;
            })
            .addCase(fetchAllProductsByFiltersAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAllProductsByFiltersAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.products = action.payload;
            });

    }
});

export const { increment } = productSlice.actions;
export const selectAllProducts = (state) => state.product.products;
export default productSlice.reducer;
