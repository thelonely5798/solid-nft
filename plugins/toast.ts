import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
// Import the CSS or use your own!
export default defineNuxtPlugin((nuxtApp)=> {
    nuxtApp.vueApp.use(Toast)
})