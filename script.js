let color = false
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
        if (color==true){
            dark()
        }
        else{
            rainbow()
        }
    })})
}

const inp = document.getElementById("size")
inp.addEventListener("change",(event)=>{
    var size = event.target.value
    if (size>100){
        alert("Max pixels allowed is 100.")
        size=16
    }
    const temp = document.getElementById("row")
    temp.innerHTML = ``
    smt(size)
    closer()
})
const reset = document.getElementById("reset")
reset.addEventListener("click",()=>{
    const temp = document.getElementById("row")
    temp.innerHTML = ``
    smt(16)
    closer()
})
smt(16)

const colorinv = document.getElementById("colorinv")
colorinv.addEventListener("click",()=>{
    color = !color
    closer()
})

function rainbow(){
    const col = document.querySelectorAll(".pixely:hover")
    col.forEach((colo)=>{
        let colorR = Math.floor(Math.random() *255)
        let colorG = Math.floor(Math.random() *255)
        let colorB = Math.floor(Math.random() *255)
        colo.style.backgroundColor = `rgb(${colorR},${colorG},${colorB})`
    })
}

function dark(){
    const col = document.querySelectorAll(".pixely:hover")
    col.forEach((colo)=>{
        colo.style.backgroundColor = `rgb(0,0,0)`
    })
}

function settings(){
    const settingsbox = document.getElementById("settingsbox")
    settingsbox.showModal()
    const closebtn = document.getElementById("closebtn")
    closebtn.addEventListener("click",()=>{
        settingsbox.close()
    })
}

function closer(){
    const settingsbox = document.getElementById("settingsbox")
    settingsbox.close()
}