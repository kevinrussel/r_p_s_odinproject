

function humanchoice(character){
    if(character == 's'){
        return 0;
    }

    if(character == 'r'){
        return 1;
    }

    if(character == 'p'){
        return 2;
    }



}

function compchoice (){

    return Math.floor(Math.random()*3)

}

function winner(comp,human){
    if(comp == human){
        console.log("They are the same number, no one won.");
        return 0;
    }
    else if(human + 1 == comp){
        console.log("Computer wins with")
        console.log(comp)
        console.log("human chose")
        console.log(human)
        return 1;
    }
    else if(comp + 1 == human){
        console.log("human wins with")
        console.log(human)
        console.log("computer chose")
        console.log(comp)
        return 2;
    }
    else{
        if(comp < human){
            console.log("Computer wins with")
            console.log(comp)
            console.log("human chose")
            console.log(human)
            return 1;
        }
        else{
            console.log("human wins with")
            console.log(human)
            console.log("computer chose")
            console.log(comp)
            return 2;
        }

    }



}

let gamenumber = prompt("Please enter the number of times you want to play.")
let computerwins = 0
let humanwins = 0;
for(let i = 0; i <gamenumber; i ++){
    
let k = prompt("Please Enter in r, p or s ");
let comp = compchoice();
let human = humanchoice(k);
let x = winner(comp,human);
if (x == 1){
    computerwins +=1;
    console.log("computer total"+computerwins);
}
else if(x == 2){
    humanwins += 1;
    console.log("human total" +humanwins);
}
}










