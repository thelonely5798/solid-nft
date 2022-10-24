<template>
    <div class="flex flex-col">

        <div class="title-section justify-between">
            <div class="d-flex">
                <p><span class="text-first">Popular</span><span class="text-second"> Collections</span></p>
            </div>
        </div>
        <div class="relative">
            <Search />
        </div>
        <div class="w-full mt-4">
            <div class="overflow-x-auto relative">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs  uppercase bg-dark-blue">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Collection
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Volume Total
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Owners
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Total Supply
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class=" border-b bg-dark-blue border-primary-green">
                            <th scope="row" class="py-4 px-6 font-mediumtext-white whitespace-nowrap ">
                                <div class="flex items-center">
                                    <img class="eclipse"
                                        src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafybeieuqggwi3dyi3r7tsn64ls3ytpi3f42bzy6ttesprrwdieoe2dam4.ipfs.dweb.link/1127.png?ext=png" />
                                    <div class="ml-2">
                                        Apple MacBook Pro 17"
                                    </div>
                                </div>
                            </th>
                            <td class="py-4 px-6">
                                Sliver
                            </td>
                            <td class="py-4 px-6">
                                Laptop
                            </td>
                            <td class="py-4 px-6">
                                $2999
                            </td>
                        </tr>
                        <tr class=" border-b bg-dark-blue border-primary-green">
                            <th scope="row" class="py-4 px-6 font-mediumtext-white whitespace-nowrap ">
                                <div class="flex items-center">
                                    <img class="eclipse"
                                        src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafybeieuqggwi3dyi3r7tsn64ls3ytpi3f42bzy6ttesprrwdieoe2dam4.ipfs.dweb.link/1127.png?ext=png" />
                                    <div class="ml-2">
                                        Apple MacBook Pro 17"
                                    </div>
                                </div>
                            </th>
                            <td class="py-4 px-6">
                                Sliver
                            </td>
                            <td class="py-4 px-6">
                                Laptop
                            </td>
                            <td class="py-4 px-6">
                                $2999
                            </td>
                        </tr>
                        <tr class="bg-dark-blue ">
                            <th scope="row" class="py-4 px-6 font-mediumtext-white whitespace-nowrap ">
                                <div class="flex items-center">
                                    <img class="eclipse"
                                        src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafybeieuqggwi3dyi3r7tsn64ls3ytpi3f42bzy6ttesprrwdieoe2dam4.ipfs.dweb.link/1127.png?ext=png" />
                                    <div class="ml-2">
                                        Apple MacBook Pro 17"
                                    </div>
                                </div>
                            </th>
                            <td class="py-4 px-6">
                                Sliver
                            </td>
                            <td class="py-4 px-6">
                                Laptop
                            </td>
                            <td class="py-4 px-6">
                                $2999
                            </td>
                        </tr>                        
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import Search from "./Search.vue"
const items = ref([
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
    {
        url: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://www.arweave.net/VbHWqbuxrd8XI5SxjgCJi9rEgjyc1uze98-PXP8gxNQ?ext=jpeg",
        title: "123"
    },
    {
        url: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://www.arweave.net/VbHWqbuxrd8XI5SxjgCJi9rEgjyc1uze98-PXP8gxNQ?ext=jpeg",
        title: "123"
    },
    {
        url: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://www.arweave.net/VbHWqbuxrd8XI5SxjgCJi9rEgjyc1uze98-PXP8gxNQ?ext=jpeg",
        title: "123"
    },
    {
        url: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://www.arweave.net/VbHWqbuxrd8XI5SxjgCJi9rEgjyc1uze98-PXP8gxNQ?ext=jpeg",
        title: "123"
    },
    {
        url: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://www.arweave.net/VbHWqbuxrd8XI5SxjgCJi9rEgjyc1uze98-PXP8gxNQ?ext=jpeg",
        title: "123"
    },
    {
        url: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://www.arweave.net/VbHWqbuxrd8XI5SxjgCJi9rEgjyc1uze98-PXP8gxNQ?ext=jpeg",
        title: "123"
    },
    {
        url: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://www.arweave.net/VbHWqbuxrd8XI5SxjgCJi9rEgjyc1uze98-PXP8gxNQ?ext=jpeg",
        title: "123"
    },
    {
        url: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://www.arweave.net/VbHWqbuxrd8XI5SxjgCJi9rEgjyc1uze98-PXP8gxNQ?ext=jpeg",
        title: "123"
    },
    {
        url: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://www.arweave.net/VbHWqbuxrd8XI5SxjgCJi9rEgjyc1uze98-PXP8gxNQ?ext=jpeg",
        title: "123"
    },
    {
        url: "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://www.arweave.net/VbHWqbuxrd8XI5SxjgCJi9rEgjyc1uze98-PXP8gxNQ?ext=jpeg",
        title: "123"
    },

])
const getItems = computed(() => items.value)
</script>
<style scoped lang="scss">
.recent-item {
    height: 60px;
    background: #1A1F25;
    backdrop-filter: blur(64px);
    border-radius: 16px;

    & .name {
        font-weight: 700;
        font-size: 17px;
        line-height: 21px;
        display: flex;
        align-items: center;

        color: #F5F5F5;
    }

    & .author-name {
        @extend .name;
    }

    & .date {
        font-family: 'Oxanium';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #F9FAFC;
    }

    & .detail-button {
        width: 84px;
        height: 38px;
        background: #2ABB69;
        border-radius: 4px;
    }

    & .extend-button {
        background: #30353A;
    }

    & .hour {
        font-family: 'Oxanium';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 19px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #7F8A94;
    }

    & .price-eth {
        font-family: 'Oxanium';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        align-items: center;
        text-align: center;
        color: #0EE98D;
    }

    & .price {
        @extend .price-eth;
        font-size: 15px;
        line-height: 19px;
        color: #7F8A94;
    }
}

.eclipse {
    width: 40px;
    height: 40px !important;
    background: rgba(153, 162, 213, 0.04);
    backdrop-filter: blur(16px);
    border-radius: 50%;
}

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



