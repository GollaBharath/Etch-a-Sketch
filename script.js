
function smt(size){
    const container = document.getElementById("row");
    for (let i=0;i<size;i++) {
        const pixel = document.createElement("p")
        pixel.classList.add("pixel")
        container.appendChild(pixel)
        for (let j=0;j<size;j++) {
            const pixely = document.createElement("p")
            pixely.classList.add("pixely")
            pixel.appendChild(pixely)
        }
    }
}
const inp = document.getElementById("size")
    inp.addEventListener("change",(event)=>{
        size = event.target.value
        const temp = document.getElementById("row")
        temp.innerHTML = ``
        smt(size)
    })
smt(0)