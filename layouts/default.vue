<template>
    <div class="flex h-screen">
        <TheSideMenu />

        <div class="flex w-full flex-col content">
            <TheHeader />
            <slot/>
        </div>
    </div>
 
    <teleport to="body">
        <the-toast v-for="(notification, index) in getNotifications" :messageType="notification.type" :index="index"
            :message="notification.message" />
    </teleport>
</template>


<script setup lang="ts">
import TheSideMenu from './components/TheSideMenu.vue';
import TheHeader from './components/TheHeader';

const { getNotifications } = useNotifyStore()
</script>

<script lang="ts">
import { useNotifyStore } from '~~/store/notifier';
export default defineComponent({
    methods: {
        openWalletModal() {
            this.$refs.walletModal.setOpen()
        }
    },
})
</script>

