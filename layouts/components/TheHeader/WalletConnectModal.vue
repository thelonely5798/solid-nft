<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" v-if="isOpen">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed z-10 inset-0 overflow-y-auto">
            <div
                class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0 wallet-connect-modal">
                <div
                    class="relative bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full ">
                    <div
                        class="w-full flex column bg-zinc-700 p-5  hover:cursor-pointer hover:opacity-50 border-b border-zinc-800 ">
                        <div class="flex">
                            <div>
                                <IconMetaMask />
                            </div>
                            <div class="text-2xl font-bold pl-2 flex items-center  w-full">
                                Metamask
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex column bg-zinc-700 p-5  hover:cursor-pointer hover:opacity-50 "
                        @click="connectMetamask()">
                        <div class="flex">
                            <div>
                                <IconWalletConnect />
                            </div>
                            <div class="text-2xl font-bold pl-2 flex items-center  w-full">
                                Wallet Connect
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script  lang="ts">
import { ref } from "vue"
import { useNotifyStore } from "~/store/notifier"
import { useWalletStore } from "~/store/wallet"
import { useWeb3 } from "~~/hooks/useWeb3"
import { useToast } from "vue-toastification";

export default defineComponent({
    setup() {
        const { connectMetaMask } = useWeb3()

        const { show } = useNotifyStore()
        const { setAccounts } = useWalletStore()

        const isOpen = ref(false)
        const setOpen = () => {
            isOpen.value = true
        }
        const setClose = () => {
            isOpen.value = false
        }

        const closeIfOutsideModal = (event: any) => {
            if (event.target.classList.contains("wallet-connect-modal")) {
                setClose()
            }
        }
        const connectMetamask = async () => {
            const accounts = await connectMetaMask()
            setAccounts(accounts)
            show({ message: "Connect success", type: "error" })
        }
        return { setOpen, setClose, isOpen, closeIfOutsideModal, connectMetamask }
    },
    watch: {
        isOpen(newVal) {
            if (!newVal) {
                window.removeEventListener("click", this.closeIfOutsideModal)
            } else {
                window.addEventListener("click", this.closeIfOutsideModal)
            }
        }
    }
})
</script>