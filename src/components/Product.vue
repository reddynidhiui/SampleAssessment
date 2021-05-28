<template>
 <div class="product" tabindex="0">
    <img :src="product?.hero?.href" />
    <div class="title" >{{product.name}}</div>
    <span class="price" v-show="price">$ {{price}}</span>
 </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    price () {
      if (this.product.priceRange) {
        return this.product.priceRange.selling.low
      } else if (this.product.price) {
        return this.product.price.selling
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped>
.product {
  width: 32.5%;
  position: relative;
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  height: 500px;
}
@media (max-width: 413px) {
  .product {
    width: 100%;
    margin: 5px 0;
  }
}
.title {
    position: absolute;
    padding: 10px;
    top: 0;
    background: rgba(225, 225, 225, .2);
    text-transform: uppercase;
    width: 95%;
    font-size: .7rem;
    font-weight: bold;
}
.price {
    position: absolute;
    padding: 5px;
    left: 10px;
    bottom: 50px;
    background: #255;
    color: #fff;
    font-weight: bold;
}
img {
    width: 100%;
}
</style>
