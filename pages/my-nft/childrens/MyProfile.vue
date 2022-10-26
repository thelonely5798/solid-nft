<template>
    <div class="w-full p-3 rounded-lg flex">
        <div ref="avatarRef" class="w-[120px] flex justify-center">
        </div>
        <div>
            <div>
                <b>Address: </b> {{ network.getAddress }}
            </div>
            <div class="flex w-full">
                <div>
                    <b>TOTAL ITEMS: </b>1
                </div>
                <div class="ml-5">
                    <b>UNLISTED ITEMS: </b> 1
                </div>
            </div>
            <div class="flex w-full">
                <div>
                    <b>ESTIMATED VALUE: </b>1
                </div>
                <div class="ml-5">
                    <b>LISTED ITEMS: </b> 1
                </div>
            </div>
        </div>

    </div>
</template>


<script setup lang="ts">
import jazzicon from "@metamask/jazzicon"
import { useNetWork } from "@/store/network"
const network = useNetWork()

const avatarRef = ref()
onMounted(() => {
    watch(() => network.getAddress, (value) => {
        // Make icon
        const addr = value.slice(2, 10);
        const seed = parseInt(addr, 16);
        const icon = jazzicon(100, seed);
        avatarRef?.value?.appendChild(icon)

    })
})
</script>