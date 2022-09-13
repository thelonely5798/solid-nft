import { acceptHMRUpdate, defineStore } from 'pinia'
import { reactive, computed } from "vue"

export const useWalletStore = defineStore('wallet', () => {
    const accounts = ref([])
    const setAccounts = (_accounts) => accounts.value.push(..._accounts)

    const getAccounts = computed(() => accounts.value)
    const isWalletConnected = computed(() => getAccounts.value.length)

    return {
        accounts,
        setAccounts,
        isWalletConnected,
        getAccounts
    }
})