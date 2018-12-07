var pongInit = () => {
    var computer = {
        x: 16,
        y: 0,
        color: "red",
        draw: () => {
            draw(computer.x, computer.y, computer.color)
            draw(computer.x + 1, computer.y, computer.color)
            draw(computer.x - 1, computer.y, computer.color)
        },
        phy: () => {
            if (computer.x < Ball.x) {
                computer.x += 0.2
            }
            if (computer.x > Ball.x) {
                computer.x -= 0.2
            }
            if (computer.x <= 2) {
                computer.x = 2
            }
            if (computer.x >= 30) {
                computer.x = 30
            }
        }
    }

 
    player.draw = () => {
        draw(player.x, player.y, player.color)
        draw(player.x + 1, player.y, player.color)
        draw(player.x - 1, player.y, player.color)
    }
    player.y = 31
    player.phy = () => {
        if (player.x <= 1) {
            player.x = 1
        }
        if (player.x >= 30) {
            player.x = 30
        }
    } 
    Ball.phy = ()=>{ 
        if (Ball.x >= 32) {
            Ball.dx *= -1
        }
        if (Ball.x <= 0) {
            Ball.dx *= -1
        }
        Ball.y += Ball.dy
        Ball.x += Ball.dx
        if (Ball.y == 31 && (Math.abs(Ball.x-player.x)<2) ){
            Ball.dx +=  (Ball.x-player.x) * 0.0125  
            Ball.dy *= -1
        }
        if (Ball.y == 1 && (Math.abs(Ball.x-computer.x)<2) ){
            Ball.dx +=  (Ball.x-player.x) * 0.0125  
            Ball.dy *= -1
        }
       
    }

    drawables.push(player)
    drawables.push(Ball)
    drawables.push(computer)

    $(document).keydown((e) => {
            console.log(e);
            
        switch (e.key) {

            case "ArrowLeft":
                player.x -= 1
                break;
            case "ArrowRight":
                player.x += 1
                break;
            case "q":
                // toStart()
                break;
            case " ":
                engine.pause = false
                break;
            default:
                break;
        }

    })
    engine.run()
}
