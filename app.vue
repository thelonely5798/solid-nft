<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');

* {
  font-family: 'Oxanium', cursive;
  color: white;
  font-size: 16px;
}
.title-section {
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

.content {
  background: linear-gradient(180deg, #131416 0%, #040506 100%);
  height: 100%;
  width: 100%;
  padding-left: 40px;
  padding-bottom: 40px;
}
</style>
<script setup lang="ts">
import "flowbite"
import { useWeb3 } from './hooks/useWeb3';
import { useNotifyStore } from './store/notifier';
import { useWalletStore } from './store/wallet';

const { show } = useNotifyStore()
const { setAccounts } = useWalletStore()
const { connectMetaMask, init } = useWeb3()

onMounted(async () => {
  init((event: string, data: any) => {
    if (event === "accountsChanged") {
      const { accounts } = data
      setAccounts(accounts)
    }
  })
  connectMetaMask().then(accounts => {
    setAccounts(accounts)
  }).catch(err => {
    show({type: "error", message: err})
  } )
})

</script>