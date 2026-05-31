
function Gameboard(player1, player2) {
    
    currentPlayer = player1; 
    function nextPlayersTurn () {
        if (currentPlayer === player1) {
            currentPlayer = player2;
        }
        else {
            currentPlayer = player1;
        }
    }

    const spot0 = document.getElementById("index0");
    const spot1 = document.getElementById("index1");
    const spot2 = document.getElementById("index2");
    const spot3 = document.getElementById("index3");
    const spot4 = document.getElementById("index4");
    const spot5 = document.getElementById("index5");
    const spot6 = document.getElementById("index6");
    const spot7 = document.getElementById("index7");
    const spot8 = document.getElementById("index8");

    spot0.addEventListener("click", function (e) {
        this.textContent = currentPlayer.marker; 
        console.log("SPOT 0 was pressed");
        nextPlayersTurn();
    });
    
    return new Array(9);
}

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.points = 0;
}

function Game() {
    const player1 = new Player("Rober", "X");
    const player2 = new Player("chicken", "Y")
    let newGameBoard = Gameboard(player1, player2);

}


Game();



// const playerX = new Player(prompt("enter your name"), "X");
// const playerY = new Player(prompt("enter your name"), "Y");
