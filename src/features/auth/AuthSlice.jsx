import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  AuthAPI  from "./AuthAPI"

const initialState = {
    value: 0,
    status: "goutam"
}
export const incretementAsync = createAsyncThunk('counter/AuthAPI',
    async (amount) => {
        const response = await AuthAPI(amount);
        return response.data;
    }
)
export const AuthSlice = createSlice({
    name: "auth",
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
export const { increment } = AuthSlice.actions;
// export const selectCount = (state) = state.auth.value;
export default AuthSlice.reducer;