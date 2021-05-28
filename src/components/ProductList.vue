<template>
  <div class="product-list">
    <Product v-for="product in products" :product="product" :key="product.id"
    @click="openModal(product)"
    @keypress.enter="openModal(product)"/>
    <Modal :show="showModal">
      <button class="close-btn" @click="showModal = false">X</button>
      <splide v-if="images.length" :options="options">
        <splide-slide v-for="(img, index) in images" :key="index">
          <img :src="img.href" />
        </splide-slide>
      </splide>
      <div class="img-not-available" v-else>No images available</div>
    </Modal>
  </div>
</template>

<script>
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import Product from './Product.vue'
import Modal from './Modal.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import {response} from '../MockData'

export default {
  name: 'ProductList',
  data () {
    return {
      products: [],
      showModal: false,
      options: {
        rewind: true,
        width: 363,
        perPage: 1,
        gap: '1rem'
      },
      images: []
    }
  },
  components: {
    Product,
    Modal,
    Splide,
    SplideSlide
  },
  methods: {
    fetchProducts () {
      fetch('https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json')
        .then(stream => stream.json())
        .then(data => { if (data.groups) { this.products = data.groups }})
        .catch(error => {
            console.error(error);
            console.log("taking the offline response as the api is failed to fetch");
            this.products = response.groups;
          });
    },
    openModal (product) {
      this.images = product.images.slice(0)
      this.showModal = true
    }
  },
  mounted () {
    this.fetchProducts()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-list {
  margin: 20px 2%;
  text-align: left;
}
.close-btn {
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ccc;
  cursor: pointer;
  z-index: 100;
  border-radius: 10px;
  width: 20px;
  height: 20px;
}
.img-not-available {
  width: 300px;
  padding: 20px;
  border: 2px solid;
  background: #fff;
}
.splide__slide {
  width: 363px !important;
}
</style>
