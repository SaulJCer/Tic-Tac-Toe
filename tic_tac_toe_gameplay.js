
function Gameboard(player1, player2) {
    

    let gameBoardArray= new Array(9);

    const resetButton = document.getElementById('resetBtn');
    resetButton.addEventListener("click", function (e) {
        
        resetButton.classList.add("hiddenBtn");
        spot0.textContent = '';
        spot1.textContent = '';
        spot2.textContent = '';
        spot3.textContent = '';
        spot4.textContent = '';
        spot5.textContent = '';
        spot6.textContent = '';
        spot7.textContent = '';
        spot8.textContent = '';

        delete gameBoardArray;
        Game();
    })


    currentPlayer = player1; 
    function nextPlayersTurn () {
        if (currentPlayer === player1) {
            currentPlayer = player2;
        }
        else {
            currentPlayer = player1;
        }
    }

        function checkIfWin (gameBoardArray) {
        firstRowCond = (gameBoardArray[0] == "X" || gameBoardArray[0] == "Y")  
        && ((gameBoardArray[0] == gameBoardArray[1]) && gameBoardArray[0] == gameBoardArray [2])

        secondRowCond = (gameBoardArray[3] == "X" || gameBoardArray[3] == "Y")  
        && ((gameBoardArray[3] == gameBoardArray[4]) && gameBoardArray[3] == gameBoardArray [5])

        thirdRowCond = (gameBoardArray[6] == "X" || gameBoardArray[6] == "Y")  
        && ((gameBoardArray[6] == gameBoardArray[7]) && gameBoardArray[6] == gameBoardArray [8])

        firstColCond = (gameBoardArray[0] == "X" || gameBoardArray[0] == "Y")  
        && ((gameBoardArray[0] == gameBoardArray[3]) && gameBoardArray[0] == gameBoardArray [6])

        secondColCond = (gameBoardArray[1] == "X" || gameBoardArray[1] == "Y")  
        && ((gameBoardArray[1] == gameBoardArray[4]) && gameBoardArray[1] == gameBoardArray [7])

        thirdColCond = (gameBoardArray[2] == "X" || gameBoardArray[2] == "Y")  
        && ((gameBoardArray[2] == gameBoardArray[5]) && gameBoardArray[2] == gameBoardArray [8])
        
        leftRightDiag = (gameBoardArray[0] == "X" || gameBoardArray[0] == "Y")  
        && ((gameBoardArray[0] == gameBoardArray[4]) && gameBoardArray[0] == gameBoardArray [8])

        RightLeftDiag = (gameBoardArray[2] == "X" || gameBoardArray[2] == "Y")  
        && ((gameBoardArray[2] == gameBoardArray[4]) && gameBoardArray[2] == gameBoardArray [6])
        
        
        if (firstRowCond || secondRowCond || thirdRowCond 
            || firstColCond || secondColCond || thirdColCond
            || leftRightDiag || RightLeftDiag
        ) {
            
            alert(`${currentPlayer.name} won congrats`)
            
            resetButton.classList.remove("hiddenBtn");
            

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
            console.log(this.textContent);
            return (alert("SPOT HAS BEEN SELECTED, please choose another"))
        }
        this.textContent = currentPlayer.marker; 
        // console.log("SPOT 0 was pressed");
        gameBoardArray[0] = currentPlayer.marker;
        // console.log(`This is index 0 value ${gameBoardArray[0]}`);
        checkIfWin (gameBoardArray);
        nextPlayersTurn();
    });
    
    spot1.addEventListener("click", function (e) {
        if (this.textContent != "") {
            return (alert("SPOT HAS BEEN SELECTED, please choose another"))
        }
        this.textContent = currentPlayer.marker; 
        gameBoardArray[1] = currentPlayer.marker;
        checkIfWin (gameBoardArray);
        nextPlayersTurn();
    });
    spot2.addEventListener("click", function (e) {
        if (this.textContent != "") {
            return (alert("SPOT HAS BEEN SELECTED, please choose another"))
        }
        this.textContent = currentPlayer.marker; 
        gameBoardArray[2] = currentPlayer.marker;
        checkIfWin (gameBoardArray);
        nextPlayersTurn();
        
    });
    spot3.addEventListener("click", function (e) {
        if (this.textContent != "") {
            return (alert("SPOT HAS BEEN SELECTED, please choose another"))
        }
        this.textContent = currentPlayer.marker; 
        gameBoardArray[3] = currentPlayer.marker;
        checkIfWin (gameBoardArray);
        nextPlayersTurn();
        
    });
    spot4.addEventListener("click", function (e) {
        if (this.textContent != "") {
            return (alert("SPOT HAS BEEN SELECTED, please choose another"))
        }
        this.textContent = currentPlayer.marker; 
        gameBoardArray[4] = currentPlayer.marker;
        checkIfWin (gameBoardArray);
        nextPlayersTurn();
        
    });
    spot5.addEventListener("click", function (e) {
        if (this.textContent != "") {
            return (alert("SPOT HAS BEEN SELECTED, please choose another"))
        }
        this.textContent = currentPlayer.marker; 
        gameBoardArray[5] = currentPlayer.marker;
        checkIfWin (gameBoardArray);
        nextPlayersTurn();
    });
    spot6.addEventListener("click", function (e) {
        if (this.textContent != "") {
            return (alert("SPOT HAS BEEN SELECTED, please choose another"))
        }
        this.textContent = currentPlayer.marker; 
        gameBoardArray[6] = currentPlayer.marker;
        checkIfWin (gameBoardArray);
        nextPlayersTurn();
        
    });
    spot7.addEventListener("click", function (e) {
        if (this.textContent != "") {
            return (alert("SPOT HAS BEEN SELECTED, please choose another"))
        }
        this.textContent = currentPlayer.marker; 
        gameBoardArray[7] = currentPlayer.marker;
        checkIfWin (gameBoardArray);
        nextPlayersTurn();
        
    });
    spot8.addEventListener("click", function (e) {
        if (this.textContent != "") {
            return (alert("SPOT HAS BEEN SELECTED, please choose another"))
        }
        this.textContent = currentPlayer.marker; 
        gameBoardArray[8] = currentPlayer.marker;
        checkIfWin (gameBoardArray);
        nextPlayersTurn();
       
    });



    return gameBoardArray;
    
}

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.points = 0;
}

function Game() {

    const player1 = new Player(prompt('PLAYER 1 NAME'), "X");
    const player2 = new Player(prompt('PLAYER 2 NAME'), "Y")
    let newGameBoard = Gameboard(player1, player2);




    // checkIfWin(newGameBoard);
    console.log(newGameBoard);
}


Game();



// const playerX = new Player(prompt("enter your name"), "X");
// const playerY = new Player(prompt("enter your name"), "Y");
