
function Gameboard(player1, player2) {
    

    const gameBoardArray= new Array(9);

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
        if (this.textContent != "") {
            return (alert("SPOT HAS BEEN SELECTED, please choose another"))
        }
        this.textContent = currentPlayer.marker; 
        // console.log("SPOT 0 was pressed");
        gameBoardArray[0] = currentPlayer.marker;
        // console.log(`This is index 0 value ${gameBoardArray[0]}`);
        nextPlayersTurn();
    });
    
    spot1.addEventListener("click", function (e) {
        if (this.textContent != "") {
            return (alert("SPOT HAS BEEN SELECTED, please choose another"))
        }
        this.textContent = currentPlayer.marker; 
        gameBoardArray[1] = currentPlayer.marker;
        nextPlayersTurn();
    });
    spot2.addEventListener("click", function (e) {
        if (this.textContent != "") {
            return (alert("SPOT HAS BEEN SELECTED, please choose another"))
        }
        this.textContent = currentPlayer.marker; 
        gameBoardArray[2] = currentPlayer.marker;
        nextPlayersTurn();
    });
    spot3.addEventListener("click", function (e) {
        if (this.textContent != "") {
            return (alert("SPOT HAS BEEN SELECTED, please choose another"))
        }
        this.textContent = currentPlayer.marker; 
        gameBoardArray[3] = currentPlayer.marker;
        nextPlayersTurn();
    });
    spot4.addEventListener("click", function (e) {
        if (this.textContent != "") {
            return (alert("SPOT HAS BEEN SELECTED, please choose another"))
        }
        this.textContent = currentPlayer.marker; 
        gameBoardArray[4] = currentPlayer.marker;
        nextPlayersTurn();
    });
    spot5.addEventListener("click", function (e) {
        if (this.textContent != "") {
            return (alert("SPOT HAS BEEN SELECTED, please choose another"))
        }
        this.textContent = currentPlayer.marker; 
        gameBoardArray[5] = currentPlayer.marker;
        nextPlayersTurn();
    });
    spot6.addEventListener("click", function (e) {
        if (this.textContent != "") {
            return (alert("SPOT HAS BEEN SELECTED, please choose another"))
        }
        this.textContent = currentPlayer.marker; 
        gameBoardArray[6] = currentPlayer.marker;
        nextPlayersTurn();
    });
    spot7.addEventListener("click", function (e) {
        if (this.textContent != "") {
            return (alert("SPOT HAS BEEN SELECTED, please choose another"))
        }
        this.textContent = currentPlayer.marker; 
        gameBoardArray[7] = currentPlayer.marker;
        nextPlayersTurn();
    });
    spot8.addEventListener("click", function (e) {
        if (this.textContent != "") {
            return (alert("SPOT HAS BEEN SELECTED, please choose another"))
        }
        this.textContent = currentPlayer.marker; 
        gameBoardArray[8] = currentPlayer.marker;
        nextPlayersTurn();
        console.log(gameBoardArray)
    });

    return gameBoardArray;
    
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

    

    console.log(newGameBoard);
}


Game();



// const playerX = new Player(prompt("enter your name"), "X");
// const playerY = new Player(prompt("enter your name"), "Y");
