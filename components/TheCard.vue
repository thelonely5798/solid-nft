<template>
    <div class="card" >
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
.card::before {
    content: '';
    position: absolute;
    background: linear-gradient(90deg, rgba(44,84,54,1) 32%, rgba(73,148,66,1) 56%, rgba(33,204,119,1) 88%);
    width: 100px;
    height: 2px;
    bottom: 0;
}

.card::after {
    content: '';
    position: absolute;
    background: linear-gradient(90deg, rgba(44,84,54,1) 32%, rgba(73,148,66,1) 56%, rgba(33,204,119,1) 88%);
    width: 100px;
    height: 2px;
    top: 0;
}

.card {
    height: 450px;
    width: 100%;
    border-radius: 16px;
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(180deg, #191B1F 0%, rgba(25, 27, 31, 0.64) 100%);
    padding: 10px;

    & .card-image {
        width: 100%;
        height: 300px;
        filter: drop-shadow(0px 16px 16px rgba(0, 0, 0, 0.08));
        border-radius: 8px;
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