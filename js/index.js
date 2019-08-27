
const init = async () => {
    // This doesn't work: Unexpected token ,
    // See dist/worker.bundle.worker.js:96:230
    new Worker("./worker.js", { type: "module", name: "worker" })
    
    // This works, just switched order of WorkerOptions props
    // new Worker("./worker.js", { type: "module", name: "worker" })
}

window.addEventListener("DOMContentLoaded", async () => init())
