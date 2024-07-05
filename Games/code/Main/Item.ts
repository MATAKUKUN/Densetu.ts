
class Enventry{
    static enventryInt = [0,0,0,0,0,0,0,0,0]
    static enventryType = [1,1,1,1,1,1,1,1,]
    static enventryIntCopy = [0,0,0,0,0,0,0,0,0]
    static enventryTypeCopy = [0,0,0,0,0,0,0,0,0]
    constructor(){
        for (let i = 0; i < 9; i++) {
        }
    }
addItem(Items){
    console.log(Enventry.enventryInt)
    Enventry.enventryIntCopy = Enventry.enventryInt
    Enventry.enventryTypeCopy = Enventry.enventryType
    console.log(Enventry.enventryInt)
    for (let i = 0; i < 9; i++) {

        Enventry.enventryTypeCopy[Enventry.enventryIntCopy.indexOf(65)] = 10;
        Enventry.enventryIntCopy[Enventry.enventryIntCopy.indexOf(65)] = 64;
       }
       //Enventry.enventryIntCopy[Enventry.enventryTypeCopy.indexOf(10)] = 1;
       Enventry.enventryInt[Enventry.enventryTypeCopy.indexOf(1)]++
    }
}