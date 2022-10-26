<template>
        <div>
            <div class="d-flex title-section">
                <p><span class="text-first">My</span><span class="text-second"> Profile</span></p>
            </div>
            <div class="mt-5 w-full">
                <MyProfile />
            </div>
            <div>
                <Tabs />
            </div>
            <div class="mt-5 w-full">
                <MyNft />
            </div>
        </div>
</template>

<style lang="scss" scoped>

</style>

<script setup lang="ts">
import MyNft from './childrens/MyNft.vue';
import MyProfile from './childrens/MyProfile.vue';
import Tabs from './childrens/Tabs.vue';

</script>