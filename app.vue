<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');

* {
  font-family: 'Oxanium', cursive;
  color: white;
  font-size: 16px;
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
  const accounts = await connectMetaMask()
  setAccounts(accounts)
})

</script>