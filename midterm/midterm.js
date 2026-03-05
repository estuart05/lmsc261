


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