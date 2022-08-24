<template>
    <div class="card">
        <div class="wrapper">
            <img class="card-image" :src="url" />
            <div class="flex justify-between w-full pt-3 pb-3">
                <button class="detail-button">
                    DETAILS
                </button>
                <button class="bid-button">
                    BID
                </button>
            </div>
            <div class="flex w-full">
                <div class="flex flex-col">
                    <span class="follower-text">Followers</span>
                    <span>10.5k</span>
                </div>
                <div class="flex flex-col" style="margin-left:5px;">
                    <span class="offer-text">Offers</span>
                    <span>94</span>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { defineProps } from "vue"

// Define Props
interface IProps {
    url: string
    title: string
}

defineProps<IProps>()
</script>

<style scoped lang="scss">
.wrapper {
    position: relative;
    z-index: 999;
    padding: 10px;
}

.card {
    height: 500px;
    width: 100%;
    background: #1A1F25;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 16px;
}
.wrapper{
    z-index: 999;
    height: 100%;
    width: 100%;
    z-index: 999;
    & .card-image{
        width: 100%;
        border-radius: 16px;
        height: 350px;
    }
}
.card:hover:after {
    content: '';
    inset: 4px;
    position: absolute;
    inset: 4px;
    background: #1A1F25;
    border-radius: 16px;
}

.card:hover:before {
    content: '';
    position: absolute;
    height: 150%;
    width: calc(100% / 2);
    background: linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147));
    animation: animate 3s linear infinite;
}

@keyframes animate {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}

.detail-button {
    width: 45%;
    height: 55px;
    background: rgba(153, 162, 213, 0.08);
    backdrop-filter: blur(16px);
    border-radius: 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    border: none;
    align-items: center;
    justify-content: center;
    outline: none;
    color: #FFFFFF;

    &:hover {
        opacity: 0.5;
    }
}

.bid-button {
    @extend .detail-button;
    background: #001308 !important;
    color: #34D178 !important;
    backdrop-filter: blur(16px);
}

.follower-text {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: flex-end;
    color: #758089;
}

.offer-text {
    @extend .follower-text;
}
</style>