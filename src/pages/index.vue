<script setup>
const a = ref(7);
function add() {
  a.value++;
}
</script>

<template>
  {{ a }}
  <button @click="add">++</button>
</template>

<style lang="scss" scoped></style>
