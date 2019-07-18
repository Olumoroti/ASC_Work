let marioGames = ["SMB1", "SMB:TLL", "SMB2", "SMB3", "SMW", "SM64", "SMS", "SMG", "SMG2", "SM64DS", "NSMBDS", "NSMBW", "NSMB2", "SM3DL", "SM3DW", "NSMBU", "NSLU", "NSMBUD", "SMO"];

let marioPrices = [10, 15, 10, 15, 20, 25, 50, 30, 30, 25, 35, 15, 45, 45, 50, 50, 50, 50, 60];

for (let i = 0; i < marioGames.length; i++) {
    console.log("I want to buy", marioGames[i] + ", and it goes for", marioPrices[i], "dollars right now.");
}

// for (let game of marioGames) {
//     console.log("I know about", game);
// }