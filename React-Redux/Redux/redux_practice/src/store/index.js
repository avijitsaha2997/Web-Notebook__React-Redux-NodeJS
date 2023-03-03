import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter1: [12, 22, 32, 42],
        counter2: 26,
    },
    reducers: {
        increment(state, action) {
            state.counter++;
        },
        decrement(state, action) {
            state.counter--;
        },
        addBy(state, action) {
            state.counter += action.payload;
        }
    }
})
export const actions = counterSlice.actions;
const store = configureStore({
    reducer: { alpha: counterSlice.reducer }
})
export default store;