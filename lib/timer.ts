

class Timer {
    constructor(timer: number, callback: () => void) {
        window.setTimeout(callback, timer)
    }
}

export default Timer