import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
}
const cartSlice = createSlice({
  name: "cartslice",
  initialState: initialState,
  reducers: {
    addtocart: (state, action) => {

      var myitem = state.cart.filter((key) => key.id == action.payload.id)

      if (myitem.length >= 1) {
        alert("this product is already exist !!")
      }
      else {
        state.cart.push(action.payload);
      }
    },
    qtyIncrease: (state, action) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (action.payload.id == state.cart[i].id) {
          state.cart[i].quantity++;
        }
      }
      // alert(action.payload.id)
      // console.log(action.payload.id)

    },
    qtydecrease: (state, action) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (action.payload.id == state.cart[i].id) {
          if (state.cart[i].quantity > 1) {
            state.cart[i].quantity--;
          }
          else {
            alert("Quantity not less than 1")
          }
        }
      }
    },
    delfromcart: (state, action) => {
      // alert(action.payload.id)
      for (let i = 0; i < state.cart.length; i++) {
        if (action.payload.id == state.cart[i].id) {
          state.cart.splice(i, 1);
        }
      }
      // state.cart = state.cart.filter((key)=>key.id!=action.payload);
    }

  }
})

export const { addtocart, qtyIncrease, qtydecrease, delfromcart } = cartSlice.actions;
export default cartSlice.reducer;