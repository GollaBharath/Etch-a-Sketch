
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
    const items = document.querySelectorAll(".pixely")
    items.forEach((item)=>{item.addEventListener("mouseover",(event)=>{
        event.target.classList.add('traced')
        rainbow()
    })})
}

const inp = document.getElementById("size")
inp.addEventListener("change",(event)=>{
    size = event.target.value
    if (size>100){
        alert("Max pixels allowed is 100.")
        size=16
    }
    const temp = document.getElementById("row")
    temp.innerHTML = ``
    smt(size)
})
smt(16)

function rainbow(){
    const col = document.querySelectorAll(".traced")
    col.forEach((colo)=>{
        let colorR = Math.floor(Math.random() *255)
        let colorG = Math.floor(Math.random() *255)
        let colorB = Math.floor(Math.random() *255)
        colo.style.backgroundColor = `rgb(${colorR},${colorG},${colorB})`
    })
}

function settings(){
    
}