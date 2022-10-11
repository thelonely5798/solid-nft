<template>
    <div class="card">
        <div v-show="loading" class="h-full w-full absolute skeleton z-50">

        </div>
        <div  class="wrapper">
            <img class="card-image" :src="url" ref="refImg" />
            <div class="flex justify-between w-full pt-3 pb-3">
                <button class="detail-button">
                    DETAILS
                </button>
                <button class="bid-button">
                    BID
                </button>
            </div>
            <div class="flex w-full">
                <div class="flex flex-col" style="margin-left:5px;">
                    <span class="offer-text">Offers</span>
                    <small>94</small>
                </div>
                <div class="flex flex-col mx-2">
                    <span class=" text-center follower-text">Price</span>
                    <small>10.5 ETH</small>
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

const refImg = ref(null)
const loading = ref(true)


const onLoadFinished = () => {
}
onMounted(()=> {
    loading.value = false

})
</script>

<style scoped lang="scss">

.card {
    height: 350px;
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
    z-index: 1;
    height: 100%;
    width: 100%;
    padding: 10px;
    & .card-image{
        width: 100%;
        border-radius: 16px;
        height: 250px;
    }
}
.skeleton {
    background-color: #DDDBDD;
    
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 20%,
      rgba(#fff, 0.5) 60%,
      rgba(#fff, 0)
    );
    animation: shimmer 2s infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
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
    height: 30px;
    background: rgba(153, 162, 213, 0.08);
    backdrop-filter: blur(16px);
    border-radius: 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
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
    font-size: 12px;
    line-height: 12px;
    display: flex;
    align-items: flex-end;
    color: #758089;
}

.offer-text {
    @extend .follower-text;
}
</style>