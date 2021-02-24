class Alphabet {
    constructor(letterString, x, y, size, color, font){
        
        this.textPosX = x; 
        this.textPosY = y; 
        this.size =size; 
        this.col = color; 
        this.font = font; 
        this.letter = letterString; 
    
    }

    write(){
        rectMode(CENTER);
        fill(this.col); 
        noStroke();
        textFont(this.font);
        textSize(this.size);
        text(this.letter, this.textPosX , this.textPosY +50);
    }
}

