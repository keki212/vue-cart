<template>
    <tr>
        <th scope="row">1</th>
        <td>{{ item.name }}</td>
        <td>{{ item.cantidad }}</td>
        <td>
            <button class="btn btn-outline-danger btn-sm" @click="disminuir(item.id)">-</button>
            <button class="btn btn-outline-success btn-sm ms-2" @click="aumentar(item.id)">+</button>
        </td>
        <td>$ {{ item.precio * item.cantidad }}</td>
    </tr>
</template>

<script>
import { useStore } from 'vuex';
export default {
    name: 'item',
    props:['item'],
    setup(){
        const store = useStore();
        const aumentar = id => {store.commit('aumentar', id)};
        const disminuir = id => {store.commit('disminuir', id)}

        return {aumentar, disminuir}
    }
}
</script>
