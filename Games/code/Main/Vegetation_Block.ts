
//植物
class Vegetation_BLocks extends Block{
    growth = 0;
    growthLevel = 0;
    soiltexture =  './Games/assts/Block/dirt.png';
}

//じゃがいも
class potato extends Vegetation_BLocks{
    name = "じゃがいも"
    URLList = ["1","2","3","4"]
    Loop(){
        this.growth++;
        if(this.growth == 30){
            this.growthLevel++;
            this.growth = 0;
        }
        if(this.URLList[this.growthLevel] != null){
            this.Blocktexture = this.URLList[this.growthLevel];
        }
    }
    Intit(){

    }
}

class carrot extends Vegetation_BLocks{
    name = 'にんじん';
    URLList = ["1","2","3","4"]
    Loop(){
        this.growth = this.growth+1;
        //console.log(this.growth)
        if(this.growth == 30){
            this.growthLevel++;
            this.growth = 0;
            
        }
        if(this.URLList[this.growthLevel] != null){
            this.Blocktexture = this.URLList[this.growthLevel];
        }
    }
    Intit(){

    }
}