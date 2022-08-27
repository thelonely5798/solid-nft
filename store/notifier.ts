import { acceptHMRUpdate, defineStore } from 'pinia'

const delay = (t: number) => new Promise((r) => setTimeout(r, t))


export interface INotification {
  message: string
  type: "success" | "fail" | "warning"

}
export const useCounter = defineStore('notifier', () => {
  const notifications = ref<INotification[]>([])
  const show = (notification: INotification) => {
    notifications.value.push(notification)
  }
  const deleteFirst = () => {
    notifications.value.shift()
  }
  const getNotifications = computed(()=> notifications.value)
  return { show, deleteFirst, getNotifications }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
}
