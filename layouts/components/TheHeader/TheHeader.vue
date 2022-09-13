<template>
    <div class="w-full">
        <div class="flex justify-end pr-5 pt-5">
            <button v-if="!isWalletConnected"
                class="text-slate-500 hover:opacity-50 py-2 px-4 border border-gray-400 rounded shadow"
                @click="openWalletModal">
                Connect your wallet
            </button>
            <div class="block relative">
                <button @click="handleConnectWalletButton_click" v-if="isWalletConnected"
                    style="background-color: #249254 ;"
                    class="text-2xl text-slate-500 text-white hover:opacity-50 py-2 px-4  rounded shadow">
                    {{getAccounts[0].substr(0,5)}} ... {{getAccounts[0].substr(16,5)}}
                </button>
                <div v-if="clickedButton" class="absolute bg-slate-800 w-96 right-0 py-5">
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
const { accounts, getAccounts } = useWalletStore()

const isWalletConnected = computed(() => getAccounts.length)

const clickedButton = ref(false)

const handleConnectWalletButton_click = () => clickedButton.value = !clickedButton.value
</script>
        
<script lang="ts">
import { useWeb3 } from '~~/hooks/useWeb3';
import { useWalletStore } from '~~/store/wallet';
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
    

