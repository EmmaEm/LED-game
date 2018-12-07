var debugInit = () => {
    drawables.push(player)
    $(document).keydown((e) => {

        switch (e.key) {
            case "ArrowUp":
                player.y -= 1
                break;
            case "ArrowDown":
                player.y += 1
                break;
            case "ArrowLeft":
                player.x -= 1
                break;
            case "ArrowRight":
                player.x += 1
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