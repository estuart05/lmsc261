let grGr = 0

const drawing = p5 => {
    p5.setup = () => {
        p5.createCanvas(500, 500); 
    }
    let xPos
    let coDir = false
    let coInc = 1
    let cirSize = true
    let cirSizeCond 

    p5.draw = () => {
        p5.background(220-(p5.mouseY*(0.2)), 210, 230); 
        console.log(200-(p5.mouseY*(0.2)))
        if (coInc>255){
            coDir=false
        }

        if (coInc <= 0){
            coDir=true
        }
        //console.log(coDir)

        if (coDir == true) { 
            coInc++
        } else {
            coInc--
        }
        //console.log(coInc)

        for (let i = 0; i < 24; i++) {
            xPos = (i-12)*18
            cirSizeCond = (coInc+i)%4
            //console.log(cirSizeCond)

            p5.noStroke()
            p5.fill(p5.mouseY, coInc, 50+(i*15)) 

            if (cirSizeCond == 3) {
                p5.circle((p5.width/2) + xPos, p5.height/2, 17);
            } else if (cirSizeCond == 2) {
                //cirSize = true;
                p5.circle((p5.width/2) + xPos, p5.height/2, 21);
                //console.log(cirSize);
            } else if (cirSizeCond == 1) {
                p5.circle((p5.width/2) + xPos, p5.height/2, 17);
            } else {
                //cirSize = false;
                p5.circle((p5.width/2) + xPos, p5.height/2, 15); 
                //console.log(cirSize);
            }
            
            
            //console.log(i)*/
        }
    }
}

new p5(drawing); // #2
