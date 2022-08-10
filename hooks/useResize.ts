import { ref, onMounted, onUnmounted } from "vue"


function useResize() {
    const x = ref(0)
    const y = ref(0)
    function resizeScreen(event) {
        x.value = window.innerHeight
        y.value = window.innerWidth
    }
    onMounted(() => {
        window.addEventListener("resize", resizeScreen)
    })
    return { x, y }
}


export default useResize