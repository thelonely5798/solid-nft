<template>
    <div class="side-menu height-screen">
        <div class="logo">
            <p class="text-first">KoKo</p>
            <p class="text-second">NFT</p>
        </div>

        <div class="menu-items">
            <div @click="navigate(item.url as string)" col v-for="(item, index) in menuItems" class="menu-item" :key="index">
                <component :key="index" :is="item.icon" />
                <span class="menu-item-title">{{ item.title }}</span>
            </div>
        </div>
    </div>
</template>

<script  setup lang="ts">
import { ref, h } from "vue"
import IconHome from "@/components/IconHome.vue"
import IconWallet from "@/components/IconWallet.vue"
import IconMarket from "@/components/IconMarket.vue"
import IconSupport from "@/components/IconSupport.vue"

const router = useRouter()
const menuItems = ref([
    {
        title: "Home",
        icon: "icon-home",
        url: "/"
    },
    {
        title: "My Nft",
        icon: "icon-market",
        url: "/my-nft"
    },
    {
        title: "Marketplace",
        icon: "icon-wallet",
        url: "/market-place"
    },
    {
        title: "Support",
        icon: "icon-support"
    }
])
const navigate = (url: string) => {
    router.push(url)
}
</script>

<style scoped lang="scss">
.side-menu {
    width: 300px;
    background-color: #08080C;
}

.menu-items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.menu-item {
    margin: 5px;
    background: linear-gradient(180deg, #191B1F 0%, rgba(25, 27, 31, 0.64) 100%);
    border-radius: 8px;
    width: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90px;

    & .menu-item-title {
        color: white !important;
    }

    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
}

.logo {
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;

    .text-first {
        font-family: 'Archivo Black';
        font-style: normal;
        font-weight: 400;
        font-size: 27px;
        line-height: 100%;
        color: #F5F5F5;
    }

    .text-second {
        @extend .text-first;
        color: #34D178;
    }
}
</style>