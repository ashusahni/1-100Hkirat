

let instance


class shoppingBag {
    constructor () {
        if( instance){
            throw new console.error('this instance already exist');
            
        }
        this.bag = []
        instance = this
    }
    getBag(){
        console.log(this.bag)
    }
    addItem(item){
        this.bag.push(item)
    }
}
    
const singlton = Object.freeze(new shoppingBag())
singlton.bag=[]