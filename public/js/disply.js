var arr = []
var divs = $("div")
for (let i = 0; i < 32; i++) {
    arr[i] = []
}
$("div").each((i,e)=>{
arr[Math.floor((i/32)%32)].push(e) 
})

function draw(x,y,rgb) {
    if(x<0){
        x=0
    }
    if(x>31){
        x=31
    }
    if(y<0){
        y=0
    }
    if(y>31){
        y=31
    }
    arr[Math.floor(y)][Math.floor(x)].style.backgroundColor = rgb
}
function reset() {
    arr.forEach((e)=>{
        e.forEach((i)=>{
            i.style.backgroundColor = "gray"
        })
    })
}