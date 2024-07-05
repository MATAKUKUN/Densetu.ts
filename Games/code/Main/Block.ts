
class Block{
    name = "null"
    Blocktexture
    ctx = Main.Canvas();
    x = 0;
    y = 0;
    Item = new Enventry()
    soiltexture = './Games/assts/Block/grass.png';
    clickEvent(){
        //clickされた時の処理
    }
    loop(){
        this.Item.addItem(1)
    }
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    draw(){
        Main.drawImage(this.soiltexture,this.x,this.y,64,64)
        //Main.drawImage(this.Blocktexture,this.x,this.y,64,64)
    }
}