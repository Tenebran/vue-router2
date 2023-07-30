<template>
  <div class="page">
    <div class="page__title">УРААА!!!!!</div>
    <div class="page__subTitle">Вы успешно купили товар</div>
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
    font-size: 55px;
    font-weight: 800;
    color: rgb(119, 226, 47);
  }

  &__subTitle {
    font-size: 35px;
    color: rgb(119, 226, 47);
    font-weight: 700;
  }

  &__button {
    background-color: rgb(119, 226, 47);
    color: #ffff;
    height: 40px;
    width: 200px;
    border-radius: 20px;

    &:hover {
      background-color: rgb(206, 206, 0);
      color: rgb(24, 95, 2);
      transition: 1s;
    }
  }
}
</style>
