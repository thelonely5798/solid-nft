<template>
  <transition name="home">
    <div>
      <div class="flex flex-row">
        <div class="w-full">
          <!-- Top listing -->
          <TopListing />
          <!-- Recent listings -->
          <RecentListing />
        </div>
        <div class="director-listing-area">
          <DirectorListing />
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { ref } from "vue"
import TopListing from "./childrens/TopListing.vue"
import RecentListing from "./childrens/RecentListing.vue"
import DirectorListing from "./childrens/DirectorListing.vue";

</script>
<script lang="ts">
export default defineComponent({
  methods: {
    openWalletModal() {
      this.$refs.walletModal.setOpen()
    }
  }
})
</script>
<style scoped lang="scss">
.director-listing-area {
  width: 500px;
}

.top-listing {
  height: 180px;
  display: flex;
  align-items: center;

  & .text-first {
    font-family: 'Oxanium';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    color: #fff;
  }

  & .text-second {
    @extend .text-first;
    color: #34D178 !important;
  }
}

.eclipse {
  width: 54px;
  height: 54px;
  background: rgba(153, 162, 213, 0.04);
  backdrop-filter: blur(16px);
  border-radius: 50%;
}


.home-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.home-enter-active,
.home-leave-active {
  transition: all 0.5s;
}

.home-enter,
.home-leave-to {
  opacity: 0;
}
</style>



