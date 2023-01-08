<template>
  <div>
    <Navigation>
      <form class="search flex">
        <input type="text" :class="toggle?'show input-btm': 'hide'" v-model="searchItems.item" @keyup="updateRef()" placeholder="Search Item">
        <MagnifyingGlassIcon class="w-16" :class="toggle?'hide':'show'" @click="toggle =!toggle"/>
      </form>
    </Navigation>

    <Commrce :items="result? result.hits: []"/>


  </div>
</template>

<script setup lang="ts">
import {MagnifyingGlassIcon} from "@heroicons/vue/24/outline"
const { result, search } = useAlgoliaSearch("items"); // pass your index as param
const searchItems = ref({
  item: ''
})

const toggle = ref(false)
const findItem = async (name: string)=> {
  await search({
    query: name
  })
}
const item = ref("");
const updateRef= async () => {
  await  findItem(searchItems.value.item)
}
onMounted(async ()=> {
 await  findItem(searchItems.value.item)
})

</script>

<style lang="scss" scoped>
input{
  border:0;
  &:focus {
    outline: none !important;
    border-bottom: 0.3px solid #c4c2c2
  }
}
</style>