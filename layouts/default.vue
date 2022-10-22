<template>
    <div class="flex h-screen">
        <TheSideMenu />

        <div class="flex w-full h-full flex-col content">
            <TheHeader />
            <slot />
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

<style lang="scss" scoped>
.content {
    background: linear-gradient(180deg, #131416 0%, #040506 100%);
    height: 100% ;
    min-height: 100vh;
    width: 100%;
    padding-left: 40px;
    padding-bottom: 40px;
}
</style>