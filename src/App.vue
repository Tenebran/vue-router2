<script setup>
// const selectedProduct = ref({})
// const productsBuyDone = ref(false)

// const onClosePayment = () => {
//   productsBuyDone.value = false
//   setModal('m2', false)
// }

// const onSelectProduct = (product) => {
//   selectedProduct.value = product
//   setModal('m2', true)
// }

// const onBuyProducts = (product) => {
//   axios
//     .post('/paymentProducts', {
//       ...product,
//       id: v4(),
//       productsId: { id: selectedProduct.value.id }
//     })
//     .then(() => {
//       productsBuyDone.value = true
//     })
//     .catch((err) => alert(err))
// }

// const submitProduct = (newProduct) => {
//   axios
//     .post('/products', newProduct)
//     .then((res) => {
//       setModal('m1', false)
//       products.value.push(res.data)
//     })
//     .catch((err) => alert(err))
// }
// let modalVisible = reactive({})
// let modalVisible2 = reactive({})
// const query = ref('')

// const queryProducts = computed(() => {
//   let p = products.value
//   let search = query.value
//   if (search) {
//     p = p.filter((product) => {
//       return (
//         product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 || product.price <= search
//       )
//     })
//   }
//   return p
// })

// let setModal = useModal({
//   m1: 2,
//   m2: 1
// })

// modalVisible = setModal('m1', false)
// modalVisible2 = setModal('m2', false)
</script>

<template>
  <!-- <MyHeader :modelValue="query" :setModal="setModal" @update:modelValue="query = $event" />
  <input type="search" placeholder="Поиск продуктов..." v-model="query" /> -->
  <RouterView></RouterView>
  <!-- <ProductList :products="queryProducts" :onSelectProduct="onSelectProduct" />
  <AddProduct :submitAddProduct="submitProduct" :modalVisible="modalVisible" />
  <PaymentProduct
    :modalVisible="modalVisible2"
    :setModal="setModal"
    :productsBuyDone="productsBuyDone"
    :onBuyProducts="onBuyProducts"
    :onClosePayment="onClosePayment"
  /> -->
</template>
<style scoped lang="scss"></style>
