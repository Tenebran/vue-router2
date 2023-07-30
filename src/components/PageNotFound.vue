<template>
  <div class="page">
    <div class="page__title">404</div>
    <div class="page__subTitle">Page Not Found</div>
    <button @click="$router.push('/')" class="page__button">GO HOME</button>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.page {
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &__title {
    font-size: 85px;
    font-weight: 800;
    color: rgb(73, 73, 238);
  }

  &__subTitle {
    font-size: 65px;
    color: rgb(73, 73, 238);
    font-weight: 700;
  }

  &__button {
    background-color: rgb(73, 73, 238);
    color: #ffff;
    height: 40px;
    width: 200px;
    border-radius: 20px;

    &:hover {
      background-color: rgb(15, 15, 163);
      color: rgb(255, 255, 34);
      transition: 1s;
    }
  }
}
</style>
