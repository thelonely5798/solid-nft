<template>
    <div class="top-listing">
        <div class="d-flex">
            <p><span class="text-first">Top</span><span class="text-second"> Directors</span></p>
        </div>
    </div>
    <div class="w-full hover:opacity-50 hover:cursor-pointer" v-for="i in 5" :key="i" :class="{'mt-2': i !== 1}" >
        <div v-for="i in 1" class="flex recent-item p-2 ml-2 mr-2 items-center flex-row">
            <div class="basis-1/4 flex items-center justify-center">
                <img class="eclipse"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4rVhu5jpfYvW75ZPG5uGpTGIlvIBrJbX5CQ&usqp=CAU" />
            </div>
            <div class="basis-2/4 flex items-center">
                <div class="author-name mr-2">
                    GrandShow Nft
                </div>
            </div>
            <!-- <div class="basis-1/4 flex flex-row justify-center items-center">
                <button class="detail-button mr-2">Detail</button>
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">

</script>
<style scoped lang="scss">
.detail-button {
    width: 84px;
    height: 38px;
    background: #2ABB69;
    border-radius: 4px;
}

.top-listing {
    height: 180px;
    display: flex;
    align-items: center;

    & .text-first {
        font-family: 'Oxanium';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 50px;
        color: #fff;
    }

    & .text-second {
        @extend .text-first;
        color: #34D178 !important;
    }
}

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
</style>



