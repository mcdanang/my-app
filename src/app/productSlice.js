import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = {...action.payload};
      const productsName = state.map(el => el.name);
      if (!productsName.includes(product.name) && product.stock > 0) {
        product.qty = 1;
        state.push(product);
      }
    },
    deleteProduct: (state, action) => {
      const product = {...action.payload};
      const productsName = state.map(el => el.name);
      if (productsName.includes(product.name)) {
        const index = productsName.indexOf(product.name);
        state.splice(index, 1);
      }
    },
    increment: (state, action) => {
      const product = {...action.payload};
      const productsName = state.map(el => el.name);
      if (productsName.includes(product.name)) {
        const index = productsName.indexOf(product.name);
        if (state[index].qty < state[index].stock) state[index].qty += 1;
      }
    },
    decrement: (state, action) => {
      const product = {...action.payload};
      const productsName = state.map(el => el.name);
      if (productsName.includes(product.name)) {
        const index = productsName.indexOf(product.name);
        if (state[index].qty > 1) state[index].qty -= 1;
        // else state.splice(index, 1);
      }
    },
  },
})

export const { addProduct, deleteProduct, increment, decrement } = productSlice.actions

export default productSlice.reducer