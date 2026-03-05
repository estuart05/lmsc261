


const drawing = p5 => {

    p5.setup = () => {
        p5.createCanvas(600, 600);
    }

    p5.draw = () => {
        p5.background(230, 230, 230)
        let centerCoords = [p5.width * .5, p5.height * .5];
        let circleSize = p5.width * .8;

        p5.noFill()
        p5.stroke(0)
        p5.strokeWeight(3)
        
        let dialHeight = Math.max( Math.min((1-(p5.mouseY/p5.height)) * (Math.PI*2), Math.PI*2), 0)
        
        let stemArcS = 0
        let stemArcE = dialHeight
        console.log(stemArcE)

        let dialRotate = p5.width*.4 * (1-(dialHeight/15))
        console.log(dialRotate)

        let dialRotateIn = p5.width*.3 * (1-(dialHeight/15))
        console.log(dialRotate)
        
        //inner circle
        p5.arc(centerCoords[0],centerCoords[1],
            p5.width*.3,
            dialRotateIn,
            0,
            Math.PI*2   
        )

        // outer dial
        p5.arc(centerCoords[0],centerCoords[1],
            p5.width*.4,
            dialRotate,
            stemArcS,
            stemArcE,
        )
        
        // bottom
        p5.arc(centerCoords[0],(centerCoords[1]+50),
            p5.width*.4,
            dialRotate,
            0,
            Math.PI,
        )
    }
}

new p5(drawing); 