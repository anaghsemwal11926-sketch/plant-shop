import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: {}, totalItems: 0, totalCost: 0 };

const recalc = (state) => {
  let totalItems = 0, totalCost = 0;
  Object.values(state.items).forEach(it => {
    totalItems += it.quantity;
    totalCost += it.quantity * it.price;
  });
  state.totalItems = totalItems;
  state.totalCost = parseFloat(totalCost.toFixed(2));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const p = action.payload;
      if (!state.items[p.id]) state.items[p.id] = { ...p, quantity: 1 };
      else state.items[p.id].quantity += 1;
      recalc(state);
    },
    incrementQuantity(state, action) {
      const id = action.payload;
      if (state.items[id]) state.items[id].quantity += 1;
      recalc(state);
    },
    decrementQuantity(state, action) {
      const id = action.payload;
      if (!state.items[id]) return;
      state.items[id].quantity -= 1;
      if (state.items[id].quantity <= 0) delete state.items[id];
      recalc(state);
    },
    removeFromCart(state, action) {
      const id = action.payload;
      if (state.items[id]) delete state.items[id];
      recalc(state);
    },
    clearCart(state) {
      state.items = {}; state.totalItems = 0; state.totalCost = 0;
    }
  }
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
