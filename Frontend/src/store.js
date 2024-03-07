import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./slice/ProductSlice"
const store = configureStore({
  reducer:{
    cartslice:cartreducer
  }
});

export default store;