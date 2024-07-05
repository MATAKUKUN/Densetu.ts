/*
    ゲームの本体です


    Canvasの設定
*/


class Main{
    static stage = null
    static Init(){
        Main.stage = "Game"
    }
    static Canvas(){
        return document.getElementById("Mycanvas").getContext("2d");
    }
    static drawImage(src,x,y,width,height){
        const ctx = Main.Canvas()
        var image = new Image();
        image.src = src
        image.addEventListener('load', () => {
            //画像を描画
            ctx.drawImage(image, x,y,width,height)
          })
    }
}
var blockList = [new Block(0,0)]
for (let i = 0; i < 100; i++) {
    blockList.push(new Block(0,0))
}

 function fill() {
    for (let y = 0; y < 14; y++) {
    for (let x = 0; x < 14; x++) {
        blockList[x][0] = new Block(x*64,y*64);
        blockList[x][0].draw()
        blockList[x][0].loop()
    }
}
//console.log(blockList);
 }
/*短縮系*/
class shortening{
    static Game = "Game"
}
Main.Init()
document.getElementById("Mycanvas").addEventListener('mousemove', Mouse.onClick, false);
function main() {                //GameLoop
    switch (Main.stage) {
        case shortening.Game:
            
            break;
    
        default:
            console.log("このwindowは作られていません")
            break;
    }
    fill()
    Main.Canvas().fillStyle = "rgba(" + [0, 0, 0, 0.5] + ")";
    Main.Canvas().fillRect((Math.round((Mouse.mouse_x+32)/64)*64)-64,(Math.round((Mouse.mouse_y+32)/64)*64)-64,64,64)
    requestAnimationFrame(main)
}
requestAnimationFrame(main)