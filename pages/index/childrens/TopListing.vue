<template>
    <div class="top-listing justify-between">
        <div class="d-flex">
            <p><span class="text-first">Top</span><span class="text-second"> Listings</span></p>
        </div>
        <div class="flex justify-between">
            <div class="eclipse flex justify-center items-center hover:opacity-50 mr-2 cursor-pointer">
                <icon-arrow-left />
            </div>
            <div class="eclipse flex justify-center items-center hover:opacity-50 cursor-pointer">
                <icon-arrow-right />
            </div>
        </div>
    </div>
    <div
        class="grid grid-cols-2 lg:grid-cols-3  6xl:grid-cols-5 gap-4">
        <div v-for="(card, index) in getTopListings">
            <the-card :url="card.url" title="" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import IconArrowLeft from "@/components/IconArrowLeft.vue"
import IconArrowRight from "@/components/IconArrowRight.vue"
import IconArrowRight1 from "../../components/IconArrowRight.vue"
import useResize from "~~/hooks/useResize";

// Top listings
const topListings = ref([
    {
        url: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://dweb.link/ipfs/QmPizcdvyRhYy4c73aV2sKZ2iwa2qCr17CAL6KhFhVuvbM/13.png",
        title: "123"
    },
    {
        url: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://dweb.link/ipfs/QmTFo9jVdLui8X1L2idY9VnmGWUg1AqyD31vKf5urE73cz/3131.png",
        title: "123"
    },
    {
        url: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://dweb.link/ipfs/QmQKmhNQqGhEb9Gm9GxRty8GCm8YUiaCBFWw7PMwJdcWFD/1862.png",
        title: "123"
    },
    {
        url: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://dweb.link/ipfs/QmPS5zYVeVe17HbxLq8k34So5uu2kPWfMKbGKEH5MzwxR5/1083.png",
        title: "123"
    },
    {
        url: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://www.arweave.net/VbHWqbuxrd8XI5SxjgCJi9rEgjyc1uze98-PXP8gxNQ?ext=jpeg",
        title: "123"
    },

])
const getTopListings = computed(()=>{
    return topListings.value
})
const { x, y } = useResize()

</script>
<style scoped lang="scss">
.top-listing {
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

.eclipse {
    width: 54px;
    height: 54px;
    background: rgba(153, 162, 213, 0.04);
    backdrop-filter: blur(16px);
    border-radius: 50%;
}
</style>



