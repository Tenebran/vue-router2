<template>
  <header class="header">
    <a href="" class="header__logo"></a>
    <input
      v-if="search"
      type="search"
      placeholder="Поиск продуктов..."
      :value="modelValue"
      @input="(event) => $emit('update:modelValue', event.target.value)"
    />
    <span>{{ props.query }}</span>
    <nav class="header__nav">
      <router-link class="header__link" to="/">Магазин</router-link>
      <router-link class="header__link" to="/addProduct">Добавить товар</router-link>
      <router-link class="header__link" to="/pay">Корзина</router-link>
    </nav>
  </header>
</template>

<script setup>
const props = defineProps(['modelValue', 'search'])
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 99;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.3);
  padding: 0 20px;

  &__link {
    text-decoration: none !important;
    color: rgb(59, 59, 59);
    margin: 0 10px 0;
    font-weight: 700;
    font-size: 18px;
    &:hover {
      color: #212121;
    }
  }

  &__page {
    font: 700 32px sans-serif;
    color: #212121;
    margin: 20px;

    &:first-child {
      margin-left: 0;
    }
  }

  &__logo {
    width: 70px;
    height: 70px;
    background: url('./icon/logo-apple.png') no-repeat center/contain;
    border-radius: 50%;
  }

  &__menu__button {
    display: none;
    width: 100px;
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    background: url('./icon/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724c3cb0f7.1188475115301637882486.png')
      no-repeat center/contain;
    cursor: pointer;
  }

  &__menu__button.open {
    background: url('./icon/PinClipart.com_miniclip-minecraft_356107.png') no-repeat center/50px
      auto;
  }
}

@media (max-width: 992px) {
  .header {
    &__menu__button {
      display: block;
    }

    &__nav {
      border-top: 1px solid grey;
      display: none;
      flex-direction: column;
      align-items: center;
      position: fixed;
      top: 100px;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #fff;
    }

    &__page {
      margin: 30px 0 0;
    }

    &__menu__button.open + &__nav {
      display: flex;
    }
  }
}
</style>
