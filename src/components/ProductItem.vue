<template>
  <li class="products__list">
    <img :src="props.image" alt="App" class="products__img" />
    <h3 class="products__title">{{ props.title }}</h3>
    <p class="products__text">{{ props.description }}</p>
    <div class="products-wrapper">
      <div class="products__button__info">
        <div class="material-icons products__button__icon">info</div>
        <div class="products__button__content">
          В наличии: {{ props.rating.count }} шт. <br />
          Цена: {{ props.price }}$ <br />
          рейтин: {{ props.rating.rate }}
        </div>
      </div>
      <button
        class="products__button"
        @click="() => onBuyProducts(props.idProduct, props.image, props.title)"
      >
        Buy
      </button>
    </div>
  </li>
</template>

<script setup>
import { v4 } from 'uuid'

const onBuyProducts = (id, img, title) => {
  const selectProduct = JSON.parse(localStorage.getItem('onBuyProducts'))
  localStorage.setItem(
    'onBuyProducts',
    JSON.stringify(
      selectProduct
        ? [...selectProduct, { id, img, title, productId: v4() }]
        : [{ id, img, title, productId: v4() }]
    )
  )
}

const props = defineProps([
  'title',
  'description',
  'image',
  'price',
  'count',
  'rating',
  'idProduct'
])
</script>

<style lang="scss" scoped>
.title2 {
  display: flex;
  justify-content: space-evenly;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
body {
  position: relative;
}

.products {
  &-wrapper {
    display: flex;
    flex-direction: column;
  }
  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 300px;
    background-color: #fff;
    border: 1px solid #8a8888;
    border-radius: 6px;
    padding: 0 0 20px 0;
    margin: 20px;
    transition: 1s;
    &:hover {
      transition: 1s;
      box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
    }
  }

  &__title {
    font: 700 32px sans-serif;
    padding: 0 15px;
    margin: 15px 0 20px;
  }

  &__text {
    padding: 0 15px;
    margin: 0 0 40px;
    max-height: 74px;
    overflow: hidden;
  }

  &__img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 6px 6px 0 0;
  }

  &__button {
    display: inline-block;
    align-items: center;
    background-color: #fff;
    border: 1px solid rgb(65, 125, 202);
    padding: 10px 20px;
    border-radius: 5px;
    color: rgb(65, 125, 202);
    cursor: pointer;
    transition: 1s;
    margin-top: 10px;

    &__info {
      display: inline-block;
      position: relative;
      color: rgb(65, 125, 202);
      cursor: help;
      margin: 20px 0 0 0;

      &:hover {
        color: blue;
      }
    }

    &__icon {
      &:hover + .products__button__content {
        display: block;
      }
    }

    &__content {
      display: none;
      position: absolute;
      top: 0;
      left: 100%;
      width: 200px;
      font-size: 14px;
      box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.3);
      padding: 15px;
      border-radius: 6px;
      font-weight: 700;
      background-color: #fff;
      transform: translateY(-100%);
      color: #212121;
    }

    &:hover {
      color: #fff;
      background-color: rgb(65, 125, 202);
    }
  }
}

@media (max-width: 768px) {
  .products {
    &__button {
      &__content {
        left: unset;
        right: calc(50% - 125px);
        width: 250px;
      }
    }
  }
}

@media (max-width: 768px) {
  .products {
    &__button {
      &__content {
        left: unset;
        right: calc(50% - 125px);
        width: 250px;
      }
    }
  }
}
</style>
