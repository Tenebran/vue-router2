<template>
  <MyHeader />
  <Form
    @submit="(e) => onSubmit(e)"
    :validation-schema="schema"
    v-slot="{ errors }"
    class="product"
  >
    <div class="form-row">
      <div class="form-group col">
        <label>Категория</label>
        <Field
          placeholder="Выберите Категорию"
          name="category"
          as="select"
          class="form-control"
          :class="{ 'is-invalid': errors.category }"
        >
          <option disabled>Категория</option>
          <option value="men's clothing">men's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="women's clothing">women's clothing</option>
          <option value="electronic">electronic</option>
        </Field>
        <div class="invalid-feedback">{{ errors.category }}</div>
      </div>
      <div class="form-group">
        <label>Введите имя товара</label>
        <Field
          placeholder="Имя товара"
          name="title"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors.title }"
        />
        <div class="invalid-feedback">{{ errors.title }}</div>
      </div>

      <div class="form-group">
        <label>Введите Описание товара</label>
        <Field
          placeholder="Описание товара"
          name="description"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors.description }"
        />
        <div class="invalid-feedback">{{ errors.description }}</div>
      </div>

      <div class="form-group">
        <label>Картинка Товара</label>
        <Field
          placeholder="Введите Картинку url"
          name="image"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors.image }"
        />
        <div class="invalid-feedback">{{ errors.image }}</div>
      </div>

      <div class="form-group">
        <label>Цена</label>
        <Field
          placeholder="Введите цену"
          name="price"
          type="number"
          class="form-control"
          :class="{ 'is-invalid': errors.price }"
        />
        <div class="invalid-feedback">{{ errors.price }}</div>
      </div>

      <div class="form-group">
        <label>Количество</label>
        <Field
          placeholder="Введите Количество шт."
          name="count"
          type="number"
          class="form-control"
          :class="{ 'is-invalid': errors.count }"
        />
        <div class="invalid-feedback">{{ errors.count }}</div>
      </div>
    </div>
    <button type="submit" class="btn btn-primary mr-1">Добавить</button>
  </Form>
</template>

<script setup>
import { v4 } from 'uuid'
import * as Yup from 'yup'
import { Form, Field } from 'vee-validate'
import MyHeader from './MyHeader.vue'

const props = defineProps(['submitAddProduct', 'modalVisible', 'productsBuyDone'])

const schema = Yup.object().shape({
  category: Yup.string().required('Нужно выбрать категорию'),
  title: Yup.string().required('Нужно ввести имя товара'),
  description: Yup.string().required('Нужно ввести описание товара'),
  image: Yup.string().required('Нужно вставить картинку'),
  price: Yup.number().required('Нужно ввести цену').min(1),
  count: Yup.number().required('Введите количество').min(1)
})

const onSubmit = (e) => {
  props.submitAddProduct({
    id: v4(),
    title: e.title,
    price: e.price,
    description: e.description,
    category: e.category,
    image: e.image,
    rating: { rate: 0, count: e.count }
  })
}
</script>

<style lang="scss" scoped>
input {
  display: block;
  margin: 10px 0 0 0;
  width: 100%;
}
div.modal-vue3-footer {
  display: none !important;
}
</style>

<style lang="scss">
div.modal-vue3-footer {
  display: none !important;
}

.product {
  width: 500px;
  margin: 120px 0 0 80px;
}
</style>
