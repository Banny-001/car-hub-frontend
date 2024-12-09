const state={
    allProducts:[],
}
const getters={
    stock:(state)=>state.stockDetails
}

const actions = {
    async fetchProducts({ commit }) {
        try {
            const response = await axios.get('http://localhost:8000/api/products'); // Laravel API URL
            commit('SET_PRODUCTS', response.data); // Commit the data to the state
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    },
};
const mutations={

}
export default{
    state,
    getters,
    actions,
    mutations
}