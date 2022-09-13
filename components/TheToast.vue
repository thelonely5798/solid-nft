<template>
    <div>
        <div id="toast-success"
            class="flex items-center p-4 mb-4 w-full max-w-xs   bottom-0.5 right-0.5 mr-5 fixed text-gray-500 bg-gray-800 rounded-lg animate__fadeInRight"
            :style="{marginBottom: `calc(70px * ${index})`, zIndex: 999}" role="alert">
            <div v-if="messageType === 'success'"
                class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-500 rounded-lg ">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Check icon</span>
            </div>

            <div
                v-if="messageType === 'error'"
                class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg bg-red-800 dark:text-red-200">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Error icon</span>
            </div>

            <div class="ml-3 text-sm font-normal">{{message}}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { useNotifyStore } from '~~/store/notifier';
import 'animate.css';
import Timer from '~~/lib/timer';

export default defineNuxtComponent({
    props: {
        message: {
            type: String,
        },
        duration: {
            type: String
        },
        timer: {
            type: Number
        },
        index: Number,
        messageType: String
    },
    setup() {
        const { getNotifications, deleteAt } = useNotifyStore()
        return {
            getNotifications,
            deleteAt
        }
    },
    mounted() {
        new Timer(1500, () => {
            this.deleteAt(this.index)
        })
    },

})
</script>

<style scoped lang="scss">
</style>