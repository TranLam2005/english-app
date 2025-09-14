import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increament: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value--;
        },
        customIncrement: (state, actions) => {
            state.value += actions.payload;
        }
    }
})

export const {increament, decrement, customIncrement} = counterSlice.actions;
export default counterSlice.reducer;