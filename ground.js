class Ground {

    constructor(x,y,width,height ){

        var groundOptions = {
            isStatic : true 
}

this.body = Bodies.rectangle(x,y,width,height,groundOptions)
this.width = width 
this.height = height 
World.add(world,this.body)
    }
    display (){
        push ()
        rectMode (CENTER)
        fill("brown")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
pop ()
    }
}