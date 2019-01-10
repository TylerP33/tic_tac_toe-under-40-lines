$(document).ready(function() {
let addX = "<h1>X</h1>"
let addO = "<h1>O</h1>"
let turn = []
let index;
let X = 'X'
let O = 'O'
let board = [$("#one"), $("#two"), $("#three"), $("#four"), $("#five"),$("#six"), $("#seven"), $("#eight"), $("#nine")]
let combos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]]
for (let i = 0; i < board.length; i++){
	board[i].click(function(){
		if (turn.length === 0){
			index = board[i].html(addX)
			turn.push(board.indexOf(index) + "X")
		} else if (turn.length % 2 !== 0 && board[i].html() === ''){
			index = board[i].html(addO)
			turn.push(board.indexOf(index) + "O")
		} else if (turn.length % 2 === 0 && board[i].html() === ''){
			index = board[i].html(addX)
			turn.push(board.indexOf(index) + "X")
		}
		for(let i = 0; i < combos.length; i++){
			console.log(combos[0][0])
			if (turn.join("").includes(combos[i][0] + O) && turn.join("").includes(combos[i][1] + O) && turn.join("").includes(combos[i][2] + O) ){
				alert('O IS WINNER!')
				location.reload();
			} else if(turn.join("").includes(combos[i][0] + X) && turn.join("").includes(combos[i][1] + X) && turn.join("").includes(combos[i][2] + X) ){
				alert('X IS WINNER!')
				turn.length === 0
				location.reload();
			} 
		}
	})
}
});