export const state = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [], // Initialize with items from localStorage
  totalCartAmount: localStorage.getItem('totalCartAmount') ? parseFloat(localStorage.getItem('totalCartAmount')) : 0, // Initialize with the total from localStorage
};

export const mutations = {
  ADD_TO_CART(state, product) {
    state.cartItems.push(product);
    // Update the total after adding an item
    this.commit('cart/UPDATE_TOTAL');
  },
  REMOVE_FROM_CART(state, product) {
    // Find the index of the item to remove
    const index = state.cartItems.findIndex(item => item.itemName === product.itemName);
    if (index > -1) {
      state.cartItems.splice(index, 1); // Remove the selected item by index
      // Update the total after removing an item
      this.commit('cart/UPDATE_TOTAL');
    }
  },
  UPDATE_TOTAL(state) {
    // Calculate the total based on the cart items' itemPrice
    state.totalCartAmount = state.cartItems.reduce((total, product) => total + parseFloat(product.itemPrice), 0);
    
    // Store the updated total and cart items in localStorage
    localStorage.setItem('totalCartAmount', state.totalCartAmount.toFixed(2)); // Ensure the total is rounded to 2 decimal places
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  },
};

export const actions = {
  addToCart({ commit }, product) {
    commit('ADD_TO_CART', product);
  },
  removeFromCart({ commit }, product) {
    commit('REMOVE_FROM_CART', product);
  },
};

export const getters = {
  cart(state) {
    return state.cartItems;
  },
  totalCartAmount(state) {
    return state.totalCartAmount;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
