<!-- eslint-disable vue/require-v-for-key -->
<template>
  <MyHeader />

  <div v-if="payProduct" class="pay_wrapper">
    <ul v-for="list in payProduct">
      <li class="pay_list">
        <div>
          <img :src="list.img" class="pay_img" />
          <span>{{ list.title }}</span>
        </div>
      </li>
      <button @click="() => onDeleteProduct(list.id)" class="pay_button">Delete</button>
    </ul>

    <button class="pay_buy__button">Buy</button>
  </div>

  <div v-else>No Products 😢</div>
</template>

<script setup>
import MyHeader from './MyHeader.vue'
import { ref } from 'vue'

const payProduct = ref(JSON.parse(localStorage.getItem('onBuyProducts')))
const onDeleteProduct = (id) => {
  localStorage.setItem(
    'onBuyProducts',
    JSON.stringify(payProduct.value.filter((list) => list.id !== id))
  )
  payProduct.value = payProduct.value.filter((list) => list.id !== id)
}
</script>

<style lang="scss" scoped>
.pay {
  &_wrapper {
    margin: 120px 0 0 0;
  }
  &_list {
    list-style-type: none;
    border: 1px solid black;
    max-width: 40%;
  }
  &_img {
    width: 54px;
    height: 54px;
    margin: 0 20px 0;
  }
  &_button {
    margin: 5px 0 0;
  }
  &_buy__button {
    min-width: 200px;
    height: 34px;
    background-color: rgb(76, 191, 199);
    margin: 0 0 0 100px;
  }
}
</style>
