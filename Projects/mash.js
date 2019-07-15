
function randNum(number) {
    let numberRand = Math.random() * number;
    numberRand = Math.floor(numberRand);
    return numberRand;

}



function getHome() { 
    let favPlace = process.argv[2];
    if(favPlace == undefined) {
        return "NOTHING-HOLE BECAUSSE YOU NEED TO INPUT A PLACE";
    }
    let arr = ["Mansion", "Apartment", "Shack", "House", favPlace, "Hell"];
    let index = randNum(arr.length);
    return arr[index];

}



function getChildrenCount() {
    let numChildren = process.argv[3];
    if(numChildren == undefined) {
        numChildren = "NO CHILDREN BECAUSE YOU FORGOT TO PUT IN A VALUE";
        return numChildren;
    }
    if(Math.random() > .5) {
        return randNum(101) + " kids";
    } else {
        return numChildren + " kids";
    }
}



function getCar() {
    let favCar = process.argv[4];
    if(favCar == undefined) {
        return "NOTHING-MOBILE BECAUSE YOU FORGOT TO PUT IN A VALUE!";
    }
    let arr = ["Honda", "Box with Wheels", "Motorcycle", "Bananamobile", favCar, "piece of toast"];
    let index = randNum(arr.length);
    return arr[index];   
}

function deathNote() {
    let death = randNum(120);
    if(death <= 21) {
        return 22;
    } else {
        return death;
    }
}



function mash() {
    return "You will live in a " + getHome() + ", and you will have " + getChildrenCount() + ", and you'll drive a " + getCar() + " and you will DIE at " + deathNote();
}

console.log(mash());



