<template>
    <div class="w-full">
        <div class="flex justify-end pr-5 pt-5">
            <button v-if="!isWalletConnected()"
                class="text-slate-500 hover:opacity-50 py-2 px-4 border border-gray-400 rounded shadow"
                @click="openWalletModal">
                Connect your wallet
            </button>
            <div class="block relative" v-click-out-side="hideDetailModal" v-else>
                <button @click="handleConnectWalletButton_click" style="background-color: #249254 ;"
                    class="text-2xl text-white hover:opacity-50 py-2 px-4  rounded shadow">
                    {{address}}
                </button>
                <div v-if="detailModal" class="absolute bg-slate-800 w-96 right-0 py-5">
                    <button
                        class="flex justify-between text-white-500 h-18 hover:bg-slate-500 w-full text-left hover:opacity-50 py-2 px-4 rounded shadow">
                        <span>Logout</span>
                        <icon-log-out />
                    </button>
                </div>
            </div>
        </div>
    </div>
    <teleport to="body">
        <WalletConnectModal ref="walletModal" />
    </teleport>
</template>

<script setup lang="ts">
import { useNetWork } from '~~/store/network';
const network = useNetWork()
const detailModal = ref(false)
const address = computed(() => network.getAddress.substring(0, 12) + "..." + network.getAddress.substring(35))
const isWalletConnected = (() => network.getIsConnected)
const handleConnectWalletButton_click = () => detailModal.value = !detailModal.value

const hideDetailModal = () => {
    detailModal.value = false
}


</script>
        
<script lang="ts">


import WalletConnectModal from './WalletConnectModal.vue';

export default defineComponent({
    methods: {
        openWalletModal() {
            this.$refs.walletModal.setOpen();
        }
    },
    components: { WalletConnectModal },
})
</script>
    

