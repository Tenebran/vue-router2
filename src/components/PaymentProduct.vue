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
      <button @click="() => onDeleteProduct(list.productId)" class="pay_button">Delete</button>
    </ul>

    <button class="pay_buy__button" @click="() => onBuyProduct()">Buy</button>
  </div>

  <div v-else class="pay_wrappeNoProducts">No Products 😢</div>
</template>

<script setup>
import MyHeader from './MyHeader.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const payProduct = ref()

if (
  JSON.parse(localStorage.getItem('onBuyProducts')) &&
  JSON.parse(localStorage.getItem('onBuyProducts')).length > 0
) {
  payProduct.value = JSON.parse(localStorage.getItem('onBuyProducts'))
}

const onBuyProduct = () => {
  localStorage.setItem('onBuyProducts', JSON.stringify(''))
  payProduct.value = undefined
  router.push('/paymentComplete')
}

const onDeleteProduct = (id) => {
  localStorage.setItem(
    'onBuyProducts',
    JSON.stringify(
      payProduct.value.length > 1 ? payProduct.value.filter((list) => list.productId !== id) : ''
    )
  )

  payProduct.value =
    payProduct.value.length > 1
      ? payProduct.value.filter((list) => list.productId !== id)
      : undefined
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
  &_wrappeNoProducts {
    margin: 120px 0 0 0;
    display: flex;
    width: 100%;
    min-height: 80vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 32px;
    color: rgb(219, 104, 104);
    font-weight: 800;
    user-select: none;
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
