<template>
  <MyHeader :modelValue="query" @update:modelValue="query = $event" :search="true" />

  <ul class="products">
    <ProductItem
      v-for="list in queryProducts"
      :key="list.id"
      :title="list.title"
      :description="list.description"
      :image="list.image"
      :price="list.price"
      :rating="list.rating"
      :idProduct="list.id"
    />
  </ul>
</template>

<script setup></script>

<style lang="scss" scoped></style>
