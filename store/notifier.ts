import { acceptHMRUpdate, defineStore } from 'pinia'

import { watch } from 'vue';
import dayjs from "dayjs"

export interface INotification {
  message: string
  type: "success" | "error" | "warning",
  duration?: number,
  timer?: any
}
export const useNotifyStore = defineStore('notifier', () => {
  const notifications = ref<INotification[]>([])

  const show = (notification: INotification) => {
    notifications.value.push({...notification, timer: dayjs()})
  }

  const deleteAt = () => {
    notifications.value.shift()
  }
 
  const getNotifications = computed(() => {
    return notifications.value
  })
  return { show, deleteAt, getNotifications, notifications }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNotifyStore, import.meta.hot))
}
