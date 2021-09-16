<template>
  <div class="my-5">
      <h4>Carrito de Compras</h4>
      <table class="table">
          <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">Item</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Acción</th>
                  <th scope="col">Total</th>
              </tr>
          </thead>
          <tbody id="items">
              <Item v-for="item in items" key="item.id"  :item="item" />
          </tbody>
          <tfoot>
              <tr id="footer-carrito">
                  <th scope="row" colspan="5" v-if="cantidad === 0">Carrito Vacio - <button type="button" class="btn btn-light ms-2"> <span class="fs-5 text fw-bold fst-italic">Ir a comprar</span> </button></th>
                  <Footer v-else />
              </tr>
          </tfoot>
      </table>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import Item from './Item.vue';
import Footer from './Footer.vue';
export default {
    name: 'carrito',
    components: { 
        Item,
        Footer 
    },    
    setup(){
        const store = useStore();

        const items = computed(()=> store.state.carrito);
        const cantidad = computed(()=> store.getters.totalCantidad);

        return { items, cantidad };
    }
}
</script>
