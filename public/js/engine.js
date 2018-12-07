var drawables = []
var engine = {
    pause:true,
    run:()=>{
        setInterval(() => {
            reset()
            if (!engine.pause) {
                drawables.forEach(e => {
                    e.phy()
                });
            }
            drawables.forEach(e => {
                e.draw()
            });
        }, 16)
    },
    reset:()=>{
        reset()
    }
}
$(document).ready(() => {
    debugInit()
})
