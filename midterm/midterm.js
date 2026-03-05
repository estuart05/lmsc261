
const drawing = p5 => {

    p5.setup = () => {
        p5.createCanvas(600, 600);
    }

    p5.draw = () => {
        //implementing Coords
        let centerCoords = [p5.width * .5, p5.height * .5];
        let circleSize = p5.width * .8;
        let leftEdge = centerCoords[0]-(p5.width*.2)
        let rightEdge = centerCoords[0]+(p5.width*.2)

        // ~~basic setup~~
        p5.background(100, 100, 110)
        p5.noFill()
        p5.stroke(10)
        p5.strokeWeight(1)

        //draw grid
        //H
        for (inc=1; inc<10; inc++) {
            p5.line(0, 
                    (p5.height/10)*inc,
                    p5.width, 
                    (p5.height/10)*inc)
        }
        //V
        for (inc=1; inc<10; inc++) {
            p5.line((p5.height/10)*inc, 0,
                    (p5.height/10)*inc, p5.height)
        }

        
        // ~~arcs setup~~ //dialHeight= dial's circle arc height, 0–6.28, also mouse's Y position
        let simpleMouseY = (1-(p5.mouseY/p5.height))
        let expoNum = simpleMouseY*2.50599
        let dialHeight = Math.max( Math.min( expoNum**2, Math.PI*2 ), 0 )
        console.log(dialHeight)
        console.log(p5.mouseY/p5.height)

        //distance for bottom of object
        let amountDistance = centerCoords[1]+(dialHeight*7.96178344)

        let stemArcS = 0
        let stemArcE = dialHeight
        //console.log(stemArcE)

        let dialRotateOuter = p5.width*.4 * (1-(dialHeight/15))
        //console.log(dialRotate)

        let dialRotateDial = p5.width*.35 * (1-(dialHeight/15))
        //console.log(dialRotate)

        let dialRotateInner = p5.width*.3 * (1-(dialHeight/15))
        //console.log(dialRotate)
        

        // FILL
        p5.fill(130, 130, 133, 255)
        p5.strokeWeight(0)
        
        p5.arc(centerCoords[0],(amountDistance),
            p5.width*.4,
            dialRotateOuter,
            0,
            Math.PI*2,
        )
        
        p5.arc(centerCoords[0],centerCoords[1],
            p5.width*.4,
            dialRotateOuter,
            stemArcS,
            Math.PI*2
        )
        p5.rect(leftEdge, centerCoords[1],
                p5.width*.4, amountDistance-centerCoords[0]
            )


        // OUTLINES
        p5.fill(130, 130, 130, 0)
        p5.strokeWeight(3)

        // ~~draw inner circle~~
        p5.arc(centerCoords[0],centerCoords[1],
            p5.width*.3,
            dialRotateInner,
            0,
            Math.PI*2   
        )

        // ~~draw dial~~
        p5.stroke(50, 100+(dialHeight*23), 200)
        p5.arc(centerCoords[0],centerCoords[1],
            p5.width*.35,
            dialRotateDial,
            stemArcS,
            stemArcE,
        )

        // ~~draw outer circle~~
        p5.stroke(0)
        p5.arc(centerCoords[0],centerCoords[1],
            p5.width*.4,
            dialRotateOuter,
            stemArcS,
            Math.PI*2
        )
        
        // ~~draw bottom~~
        p5.arc(centerCoords[0],(amountDistance),
            p5.width*.4,
            dialRotateOuter,
            0,
            Math.PI,
        )

        // ~~draw sides ~~
        p5.line(rightEdge, centerCoords[1],
                rightEdge, amountDistance
        )
        p5.line(leftEdge, centerCoords[1],
                leftEdge, amountDistance
        )
    }
}

new p5(drawing); 


/*
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
        p5.circle(centerCoords[0],centerCoords[1],circleSize)

        //dimples
        let dimpLCoords = [p5.width*.45, p5.height*.2]
        let dimpRCoords = [p5.width*.55, p5.height*.2]

        p5.line(dimpLCoords[0], dimpLCoords[1], dimpRCoords[0], dimpRCoords[1])

        let stemArcS = Math.PI 
        let stemArcE = Math.PI *1.25
        //Arc: x, y, width, height, start angle, end angle
        p5.arc(p5.width*.7,p5.height*.2,
            p5.width*.4,
            p5.width*.4,
            stemArcS,
            stemArcE,
            
        )
        
    }
}

new p5(drawing); 
*/