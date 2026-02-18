let circRad=550

let xMov = 200
let xDrc = true
let yDrc = true
let yMov = 300

const drawing = p5 => {

    p5.setup = () => {
        p5.createCanvas(600,600)
    } 

    let circRad=10


    p5.draw = () => {
        p5.background(236, 190, 205)
        
        //platform
        for(let plat=-40; plat < 40; plat++) {
            let xPos= p5.mouseX + plat*2
            
            p5.noStroke()
            //p5.fill(100+plat*5,100,100)
            p5.circle(xPos, p5.width-(p5.width/4), 50)
            
        }
        
        //ball
        /*
        if xMov = 600 {
            xDrc = false
        }
         if xMov = 0 {
            xDrc = true
        }*/
        
        /*
        if xDrc == true {
            xMov = xMov + 10
        } else {
            xMov = xMov - 10
        }
        */

        //draw the ball
        p5.noStroke()
        p5.circle(xMov,yMov,80) 


    }
    
    /*
    p5.draw = () => {
       
    }*/
    
    
}

new p5(drawing); 
