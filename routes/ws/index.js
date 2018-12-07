var inputs = require("./inputs")
var ws = (socket)=>{
   socket.on('inputs',inputs(socket))
}
module.exports = ws