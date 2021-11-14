import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
    name: "basket",
    initialState: [],
    reducers: {
        addToBasket: (state, action) => {
            state = [...state, action.payload]
            return state;
        },
        removeToBaskets: (state, action) => {
            const index = state.findIndex((basketItem) => basketItem.id === action.payload.id);
            let newBasket = [...state];
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(`Cant remove product (id:${action.payload.id}) as its not in basket`);
            }
            state = newBasket;
            return state;
        },
    },
});
export const { addToBasket, removeToBaskets } = basketSlice.actions;
export default basketSlice.reducer;

