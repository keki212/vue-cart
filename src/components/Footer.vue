<template>
    <th scope="row" colspan="2">Total productos</th> 
    <td>{{ totalCantidad }}</td> 
    <td>
        <button class="btn btn-danger btn-sm" id="vaciar-carrito" @click="cleanCar">
            Vaciar todo
        </button>
    </td>
    <td class="font-weight-bold">$ <span>{{ precio }}</span></td>
    
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
    name : 'footer',
    setup(){
        const store = useStore();
        
        const totalCantidad = computed(() => store.getters.totalCantidad);
        const precio = computed(() => store.getters.totalPrecio);

        const cleanCar = (() => store.dispatch('vaciarCarrito'));

        return { totalCantidad, precio, cleanCar }

    }
}
</script>
