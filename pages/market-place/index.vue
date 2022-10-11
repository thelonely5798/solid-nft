<template>
    <transition name="foobar">
          <Setup/>
    </transition>
</template>

<script setup lang="ts">
import Setup from "./childrens/Search.vue"
</script>


<style lang="scss" scoped>
.content {
    height: 100vh;
}
.foobar-enter-from{
  opacity: 0;
  transform: translateY(15px);
}

.foobar-enter-active,
.foobar-leave-active {
  transition: all 0.5s;
}

.foobar-enter,
.foobar-leave-to {
  opacity: 0;
}
</style>