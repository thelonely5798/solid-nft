import { acceptHMRUpdate, defineStore } from 'pinia'
import { reactive, computed } from "vue"
import { IAccount, NetWorkAdpater } from '~~/providers/network'



export const useNetWork = defineStore('network', () => {
    const network = ref<NetWorkAdpater>()
    const account = ref<IAccount>()
    const isConnected = ref(false)

    const setNetwork = (_network: NetWorkAdpater) => {
        network.value = _network
        console.log(_network.getCurrentAccount())
        account.value = _network.getCurrentAccount()
        isConnected.value = true
    }
    const getNetwork = computed(() => network?.value)
    const getAddress = computed(() => account?.value?.address ?? "")
    const getIsConnected = computed(() => isConnected.value)

    return {
        setNetwork,
        getNetwork,
        getAddress,
        getIsConnected
    }
})