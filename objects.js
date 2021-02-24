class Letter {
    constructor(letterString){
        //splits choices in qOne by the comma 
        //becomes an array of 
        var letterChoices = letterString.split(","); 
       

        //letters keeps track of all the choices we just split by the comma
        //how can i have all the times in the letterChoices array be assigned to letters?
        this.letters = letterChoices[0];
        // this.letters1 = letterChoices [1];
        // this.letters2 = letterChoices [2];
        // this.letters3 = letterChoices [3];
        // this.letters4 = letterChoices [4];

        




        // print(this.letters);
       
    }

    write(){
       
    }
}

