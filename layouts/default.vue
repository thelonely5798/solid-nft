<template>
    <div class="flex">
        <the-side-menu />

        <div class="flex w-full flex-col content">
            <div class="w-full">
                <div class="flex justify-end pr-5 pt-5">
                <button class="text-slate-500 hover:opacity-50 py-2 px-4 border border-gray-400 rounded shadow"
                    @click="openWalletModal">
                    Connect your wallet
                </button>
            </div>
            </div>
            <slot />
        </div>
    </div>
    <teleport to="body">
        <WalletConnectModal ref="walletModal" />
    </teleport>
    <teleport to="body">
        <the-toast/>
    </teleport>
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