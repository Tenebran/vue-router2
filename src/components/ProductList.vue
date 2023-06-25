<template>
  <MyHeader :modelValue="query" @update:modelValue="query = $event" :search="true" />
  <input type="search" placeholder="Поиск продуктов..." v-model="query" />

  <ul class="products">
    <ProductItem
      v-for="list in queryProducts"
      :key="list.id"
      :title="list.title"
      :description="list.description"
      :image="list.image"
      :price="list.price"
      :rating="list.rating"
    />
  </ul>
</template>

<script setup>
import ProductItem from './ProductItem.vue'
import axios from '../api/api'
import MyHeader from './MyHeader.vue'
import { computed, ref, onBeforeMount } from 'vue'
const products = ref({})
const query = ref('')
onBeforeMount(async () => {
  products.value = (await axios.get(`/products`)).data
})

const queryProducts = computed(() => {
  let p = products.value
  let search = query.value

  if (search) {
    p = p.filter((product) => {
      return (
        product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 || product.price <= search
      )
    })
  }
  return p
})
</script>

<style lang="scss" scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 120px;
}
</style>
