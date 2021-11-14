import { configureStore } from "@reduxjs/toolkit";
import basketReduct from "../Slicer/CreateSlicer";
import UserReduct from "../Slicer/UserSlice";
const store = configureStore({
    reducer: {
        basket: basketReduct,
        users: UserReduct,
    },

});
export default store