var grassArr = []; //խոտերի զանգված
var eatersArr = []; //խոտակերների զանգված
var gishersArr = []; //gishatich
var goxsArr = []; //amenaker
var vochsArr = []; //vochxarh
var side = 20;
var matrix = [
    [0,3,0,0,1,0,1,0,1,0,1,0,0,1,0,1,2,3,1,1,2,0,1,0,1,0,0],
    [0,0,2,0,0,0,1,0,0,0,0,2,0,1,0,0,1,1,0,1,2,1,0,0,1,0,2],
    [0,1,3,0,1,0,1,0,1,0,1,0,0,2,0,1,0,2,0,1,0,0,1,0,0,0,1],
    [0,0,2,0,1,1,0,0,0,0,1,0,2,1,0,0,0,0,0,1,2,0,2,0,1,0,3],
    [0,2,0,0,0,0,0,3,0,2,0,2,0,0,0,1,2,2,1,1,3,0,0,0,0,0,1],
    [1,0,2,0,1,0,2,1,0,1,1,2,1,0,2,0,0,3,1,1,0,0,1,3,2,0,1],
    [0,1,0,0,1,1,0,2,3,2,1,0,0,1,0,1,2,0,0,0,2,0,0,0,1,0,1],
    [3,2,1,0,0,0,2,5,0,0,2,2,0,1,0,1,0,0,2,1,1,1,0,0,0,0,0],
    [0,1,2,0,4,1,1,0,2,2,0,4,1,0,0,1,0,0,0,1,2,0,1,0,1,0,2],
    [0,2,0,0,2,0,1,0,1,2,0,2,0,2,1,0,1,0,1,1,0,2,1,0,1,0,1],
    [0,1,0,0,2,1,0,0,4,1,1,4,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0],
    [0,1,2,0,0,0,1,2,1,3,1,0,0,2,1,1,3,5,0,1,2,0,0,2,0,1,3],
    [0,1,0,0,1,4,2,0,0,0,1,2,1,0,0,4,0,0,1,1,2,0,1,0,2,0,0],
    [0,0,0,0,1,2,1,0,1,0,1,3,0,1,1,1,0,0,0,1,2,5,1,0,1,0,1],
    [0,0,2,0,1,3,1,1,1,0,0,2,0,1,0,0,0,1,4,1,2,1,0,0,1,0,2],
    [0,1,0,0,1,0,1,5,4,1,0,0,0,2,0,1,1,1,2,1,0,0,1,0,0,0,0],
    [0,0,2,0,1,1,0,0,0,2,1,4,2,1,2,0,0,1,0,1,2,0,2,0,1,0,1],
    [0,2,0,0,1,2,0,3,5,2,0,2,0,0,1,1,2,2,4,1,0,0,0,0,0,0,0],
    [1,0,2,0,1,1,2,0,4,1,1,2,1,5,1,1,0,3,1,1,0,0,1,3,2,0,0],
    [0,1,0,4,1,1,3,2,3,2,1,0,0,1,0,1,2,0,1,1,2,1,0,0,1,0,1],
    [3,2,1,0,0,0,2,1,0,0,2,2,3,1,0,1,0,0,2,1,0,1,1,5,0,0,0],
    [0,1,2,0,1,1,1,0,2,0,0,1,1,0,1,1,0,2,0,1,2,0,1,2,1,0,4],
    [0,2,0,0,2,5,1,0,1,2,1,2,0,1,0,2,4,1,0,0,0,2,3,4,1,0,2],
    [0,1,0,0,2,1,0,2,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0],
    [0,1,2,0,1,0,1,2,0,0,1,0,0,2,1,1,3,0,2,1,2,0,0,2,0,1,0],
    [0,1,0,5,1,0,2,1,4,1,1,2,1,1,2,1,5,1,0,1,2,0,1,5,2,0,1] 
]

function setup() {
    noStroke();
    frameRate(6);
    createCanvas(matrix[0].length * side, matrix.length * side); //կանվասի չափերը դնել մատրիցի չափերին համապատասխան
    background('#acacac');

    //մատրիցի վրա կրկնակի ցիկլը լցնում է խոտերի, խոտակերների զանգվածները օբյեկտներով 
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
            }

            else if (matrix[y][x] == 2) {
                var eater = new GrassEater(x, y);
                eatersArr.push(eater);
            } 
            else if (matrix[y][x] == 3) {
                var gisher = new Gishatich(x, y);
                gishersArr.push(gisher);
            }
            else if (matrix[y][x] == 4) {
                var gox = new Goxakan(x, y);
                goxsArr.push(gox);
            }
            else if (matrix[y][x] == 5) {
                var voch = new Vochxar(x, y);
                vochsArr.push(voch);
            }
        }
    }
}

function draw() {
    //գծում է աշխարհը
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } 

            else if (matrix[i][j] == 2) {
                fill("yellow");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill("blue");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 4) {
                fill("black");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5) {
                fill("white");
                rect(j * side, i * side, side, side);
            }
        }
    }
    //խոտը բազմանում է
    for (var i in grassArr) {
        grassArr[i].mul();
    }

    //խոտակերը ուտում է խոտ
    for (var i in eatersArr) {
        eatersArr[i].eat();
    }
        for (var i in gishersArr) {
        gishersArr[i].eat();
    }
    for (var i in goxsArr) {
        goxsArr[i].eat();
    }
     for (var i in vochsArr) {
        vochsArr[i].eat();
    }






if (grassArr.length == 3) {
        var grass = new Grass (5,11);
        grassArr.push(grass);
    }
    
    if (goxsArr.length == 2) {
        var gox = new Goxakan (20,20);
        goxsArr.push(gox);
    }
      if (goxsArr.length == 0) {
        var gox = new Goxakan (8,10);
        goxsArr.push(gox);
    }
    if (goxsArr.length == 4) {
        var gox = new Goxakan (5,15);
        goxsArr.push(gox);
    }
    if (goxsArr.length == 6) {
        var gox = new Goxakan (10,18);
        goxsArr.push(gox);
    }
    if (grassArr.length == 8) {
        var grass = new Grass (4,20);
        grassArr.push(grass);
    }
    if (grassArr.length == 6) {
        var grass = new Grass (7,16);
        grassArr.push(grass);
    }
    if (grassArr.length == 2) {
        var grass = new Grass (8,1);
        grassArr.push(grass);
    }
    if (gishersArr.length == 3) {
        var gisher = new Gishatich (9,14);
        gishersArr.push(gisher);
    }
       if (gishersArr.length == 5) {
        var gisher = new Gishatich (12,17);
        gishersArr.push(gisher);
    }
       if (gishersArr.length == 6) {
        var gisher = new Gishatich (17,14);
        gishersArr.push(gisher);
    }
       if (vochsArr.length == 3) {
        var voch = new Vochxar (9,14);
        vochsArr.push(voch);
    }
     if (vochsArr.length == 2) {
        var voch = new Vochxar (5,4);
        vochsArr.push(voch);
    }
     if (vochsArr.length == 6) {
        var voch = new Vochxar (15,16);
        vochsArr.push(voch);
    }
     if (vochsArr.length == 5) {
        var voch = new Vochxar (7,19);
        vochsArr.push(voch);
    }
    if (goxsArr.length == 1) {
        var gox = new Goxakan (7,18);
        goxsArr.push(gox);
    }

}
