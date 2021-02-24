var table; 

var dots;
var stripes; 
var chev; 
var checker; 

var colorChoices = []; 
var colors = [];

//Dictionary for unique patterns for Question 2
var pattern ={};
//all of the answers for Question 2
var patternChoices = []; 

//Dictionary for the unique letters for Question 1
var alphabet = {};
//all of the answers for Question 1
var letterChoices = [];

//holds the Alphabet Objects
var objectAlpha = [];

var fonts = []; 


function preload(){
    table = loadTable('assets/alphabeta-data.csv', 'csv', 'headers'); 
    
//all background images
    dots = loadImage("assets/pattern-2.jpg");
    stripes = loadImage("assets/pattern-3.jpg");
    chev = loadImage("assets/pattern-1.jpg");
    checker = loadImage("assets/pattern-0.jpg");

//fonts  
    fonts =[loadFont('assets/rock.ttf'), loadFont('assets/seymour.ttf'), loadFont('assets/marker.ttf'), loadFont('assets/lobster.ttf'), loadFont('assets/reggae.ttf'), loadFont('assets/oi.ttf')];  
    
}

function setup(){
    createCanvas(windowWidth, windowHeight); 
    print(windowWidth, windowHeight);

//puts all of the colors from Q3 into an array --> colors
    for(var rowNum=1; rowNum<table.getRowCount(); rowNum++){
        colorChoices = table.get(rowNum, 3).split(",");
            for(var i=0; i<colorChoices.length; i++){ 
             colors.push(colorChoices[i]);
            }

    } 
    print(colors);

//puts patterns[key] and their frequency [value] into a dictionary
    for(var rowNum=1; rowNum<table.getRowCount(); rowNum++){
    //putting all the patterns from question 2 into an array
        var patternChoices = table.get(rowNum, 2).split(","); 
         for(var i=0; i<patternChoices.length; i++){
        //adding unique patterns to pattern dictionary
            //adding number of times it was chosen as the value
            if(patternChoices[i] in pattern){
                pattern[patternChoices[i]] += 1;
             } else {
                pattern[patternChoices[i]] = 1; 
                } 
        }
    }    
    print(pattern);

    
    for(var rowNum=1; rowNum<table.getRowCount(); rowNum++){
        //splitting the letters by the comma and putting them into letterChoices array 
        var letterChoices = table.get(rowNum, 1).split(","); 
            for(var i=0; i<letterChoices.length; i++){
            //adding unique letters from letterChoices to alphabet dictionary as key 
                //adding number of times it was chosen as the value
                if(letterChoices[i] in alphabet){
                    alphabet[letterChoices[i]] += 1;
                 } else {
                    alphabet[letterChoices[i]] = 1; 
                }
            }
        }
        print(alphabet);
    
//starting x and y position for Alphabet
    var posX = 30;
    var posY = 80;
//creates a variable for every key value pair in alphabet 
        //loops through the alphabet dictionary
    for (var [key, value] of Object.entries(alphabet)){
        if(posY > windowHeight - 80){
            // increases x pos when windowHeight is reached
            posX += 180;
            //resets yPos
            posY = 40;
        }
      //creates new Alphabet object and stores in objectAlpha array 
      objectAlpha.push(new Alphabet(key, posX, posY + 30, map(value, 1, 22, 30, 200), color(random(colors)), random(fonts)));
            posY += 150;
    } 
    print(objectAlpha);

}

function draw(){ 
    background(200);

    //background imgs 
        //size corresponds to frequency
    image(dots, 0, 0, windowWidth, windowHeight);
     var imgWidth = windowWidth/ 20; 
     var imgHeight = windowHeight/ 20;
     var imgX = windowWidth/2;
     var imgY = windowHeight/2;
    image(checker, imgX - ((imgWidth*pattern["Checkered"])/2), imgY - ((imgHeight*pattern["Checkered"])/2), imgWidth*pattern["Checkered"], imgHeight*pattern["Checkered"]);
    image(stripes, imgX - ((imgWidth*pattern["Diagonal Stripes"])/2), imgY - ((imgHeight*pattern["Diagonal Stripes"])/2), imgWidth*pattern["Diagonal Stripes"], imgHeight*pattern["Diagonal Stripes"]);
    image(chev, imgX - ((imgWidth*pattern["Chevron"])/2), imgY - ((imgHeight*pattern["Chevron"])/2), imgWidth*pattern["Chevron"], imgHeight*pattern["Chevron"]);

//writes all of the Alphabet objects onto the canvas 
    for (var i=0; i<objectAlpha.length; i++){
        objectAlpha[i].write();
    }


}
