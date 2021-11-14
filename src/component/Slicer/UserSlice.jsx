import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'login',
    initialState: {
        users: null
    }
    ,
    reducers: {
        LognIn: (state, action) => {
            state.users = action.payload;
        },
        LognOut: (state) => {
            state.users = null;
        }
    }
})
export const { LognIn, LognOut } = userSlice.actions;
export default userSlice.reducer;