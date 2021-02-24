var table; 

var dots;
var stripes; 
var chev; 
var checker; 

var colorChoices = []; 
var colors = [];
//used as a selector for random item in colors array
var color;

//Dictionary for unique patterns for Question 2
var pattern ={};
//all of the answers for Question 2
var patternChoices = []; 

//Dictionary for the unique letters for Question 1
var alphabet = {};
//all of the answers for Question 1
var letterChoices = [];

var font1; 
var font2; 
var font3; 
var font4; 
var font5; 
var font6; 
var fonts = [font1, font2, font3, font4, font5, font6]; 


function preload(){
    table = loadTable('assets/alphabeta-data.csv', 'csv', 'headers'); 
    
//all background images
    dots = loadImage("assets/pattern-2.jpg");
    stripes = loadImage("assets/pattern-3.jpg");
    chev = loadImage("assets/pattern-1.jpg");
    checker = loadImage("assets/pattern-0.jpg");

//fonts
    font1 = loadFont('assets/rock.ttf');
    font2 = loadFont('assets/seymour.ttf');   
    font3 = loadFont('assets/marker.ttf');   
    font4 = loadFont('assets/lobster.ttf');   
    font5 = loadFont('assets/reggae.ttf');   
    font6 = loadFont('assets/oi.ttf');         
    
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

    } print(colors);

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
    }    print(pattern);

    
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
        } print(alphabet);

//there are several things that I want to happen once for every thing in the alphabet dictionary (random color selection, random posX &posY, random font selection)
    //  for (var [key, value] of Object.entries(alphabet)){//for every key value pair in alphabet set a different textPosX and textPosY
    //     var textPosX = random(50, windowWidth -50); 
    //     var textPosY = random(50, windowHeight -50);
    //     }
    color = random(colors);
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

    var textPosX = 50; 
    var textPosY = 150;
    var myFont = random(fonts);
    for (var [key, value] of Object.entries(alphabet)){
        if(textPosY > windowHeight - 50){
            // this creates a new column
            textPosX += 200;
            // this sets the 'cursor' at the top of the new column
            textPosY = 150;
          }
        fill(color); 
        noStroke();
        textFont(font5);
        textSize(map(value, 1, 22, 20, 200));
        text(key, textPosX, textPosY+ 10);
        textPosY += 90; 
    }

}
