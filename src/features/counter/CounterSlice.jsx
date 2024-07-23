import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CounterAPI } from "./CounterAPI"

const initialState = {
    value: 0,
    status: "goutam"
}
export const incretementAsync = createAsyncThunk('counter/CounterAPI',
    async (amount) => {
        const response = await CounterAPI(amount);
        return response.data;
    }
)
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(incretementAsync.pending, (state) => {
            state.status = "loading";
        })
            .addCase(incretementAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.value += action.payload;
            })
    }
})
export const { increment } = counterSlice.actions;
export const selectCount = (state) = state.counter.value;
export default counterSlice.reducer;