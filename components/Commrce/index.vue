<template>
  <div>
    <h1>Store Products</h1>
    <div class="" v-if="items.length >0">
      Found {{ items.length }}
      <div class="product-cards">
        <NuxLink to="/" class="card" v-for="product in items" :key="product.name">
          <div class="card-image">
            <img :src="product.image" width="100" :alt="product.name" class="card-simage">
          </div>
          <h4 class="card-title chop">{{ product.name }}</h4>
        <div class="flex items-center mx-3 justify-between">
          <p class="card-price text-2xl"><sup>$</sup>{{ product.price }}</p>
          <div class="flex items-center">
            <p class="card-price hs-105"><HeartIcon class="w-18"/></p>
            <p class="card-price hs-105"><ShareIcon class="w-18"/></p>
          </div>
        </div>
          <button class="card-button">Add to Cart</button>
        </NuxLink>
      </div>

    </div>
    <div class="no-items" v-else>No products Found</div>
  </div>
</template>

<script setup lang="ts">
import  {HeartIcon, ShareIcon} from "@heroicons/vue/24/outline"
const {items, colors, sizes} = defineProps(['items', "colors", "sizes"])
</script>

<style lang="scss" scoped>
.justify-between{
  justify-content: space-between !important;
}
.hs-105{
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
  }
}
.product-cards {
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    .card {
      width: 50%;
      .card-image {
        height: 180px;
        margin: 0 auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
      &:nth-child(2) {
        border-right: 1px solid gray;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .card {
      width: 33.3333%;
    }
  }

  @media (min-width: 992px) {
    .card {
      width: 20%;
    }
  }
}

.card {
  box-sizing: border-box;
  padding: 1rem;
  text-align: center;
  box-shadow: 1px 2px rgba(0, 0, 0, .1);
 &:hover {
    .card-button{
      visibility: visible;
    }
 }
  .card-image {
    width: 50%;
    height: 300px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .card-title {
    margin: 1rem 0;
  }

  .card-price {
    color: #888;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .card-button {
    background-color: #465bbe;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
    transition: background-color 0.3s;
    width: 100%;
    visibility: hidden;
    &:hover {
      background-color: rgba(70, 91, 190, 0.98);

    }
  }
}
</style>