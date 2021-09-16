import { createStore } from 'vuex'

export default createStore({
  state: {
    productos: [],
    carrito: {}
  },
  mutations: {
    setProducto(state, payload) {
      state.productos = payload;
    },
    setCarrito(state, payload) {
      state.carrito[payload.id] = payload;
    },
    cleanCarrito(state){
      state.carrito = {};
    },
    aumentar(state, payload){
      state.carrito[payload].cantidad = state.carrito[payload].cantidad + 1;
    },
    disminuir(state, payload){
      state.carrito[payload].cantidad = state.carrito[payload].cantidad === 0 ? 
      delete state.carrito[payload] : state.carrito[payload].cantidad - 1;
    }

  },
  actions: {
    async fetchData({ commit }) {
      try {
        const resp = await fetch('api.json');
        const data = await resp.json();
        commit('setProducto', data);
      } catch (error) {
        console.log(error);
      }
    },
    agregarAlCarro({ commit, state }, producto) {
      state.carrito.hasOwnProperty(producto.id) 
      ? producto.cantidad = state.carrito[producto.id].cantidad + 1 
      : producto.cantidad = 1;

      commit('setCarrito', producto);
    },
    vaciarCarrito ({commit}){
      commit('cleanCarrito');
    },
    
  },
  getters:{
    totalCantidad(state){
      return Object.values(state.carrito).reduce((acc, {cantidad})=> acc + cantidad, 0);
    },
    totalPrecio(state){
      return Object.values(state.carrito).reduce((acc, {precio, cantidad}) => acc +(precio * cantidad), 0);
    }
  },
  modules: {
  }
})
