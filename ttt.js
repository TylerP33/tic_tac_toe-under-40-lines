$(document).ready(function() {
	let addX = "<h1>X</h1>"
	var xCounter = 0
	let oCounter = 0
	let draws = 0
	let addO = "<h1>O</h1>"
	let turn = []
	let board = [$("#one"), $("#two"), $("#three"), $("#four"), $("#five"),$("#six"), $("#seven"), $("#eight"), $("#nine")]
	let combos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]]
	for (let j = 0; j < board.length; j++){
		board[j].click(function(){
			if (turn.length === 0){
				turn.push(board.indexOf(board[j].html(addX)) + "X")
			} else if (turn.length % 2 !== 0 && board[j].html() === ''){
				turn.push(board.indexOf(board[j].html(addO)) + "O")
			} else if (turn.length % 2 === 0 && board[j].html() === ''){
				turn.push(board.indexOf(board[j].html(addX)) + "X")
			} 
			for(let i = 0; i < combos.length; i++){
				if (turn.includes(combos[i][0] + 'O') && turn.includes(combos[i][1] + 'O') && turn.includes(combos[i][2] + 'O') ){
					oCounter++
					$("#oScore").html(oCounter)
					alert('O IS WINNER!')
					setTimeout(function() {$("#ttt_table tbody tr td").html(""); }, 1500);
					turn.length = 0
					break
				} else if(turn.includes(combos[i][0] + 'X') && turn.includes(combos[i][1] + 'X') && turn.includes(combos[i][2] + 'X') ){
					xCounter++
					$("#xScore").html(xCounter)
					alert('X IS WINNER!')
					setTimeout(function() {$("#ttt_table tbody tr td").html(""); }, 1500);
					turn.length = 0
					break
				} else if (turn.length === 9 && combos[i] === combos[combos.length - 1]) {
					draws++
					$("#DRAWS").html(draws)
					alert('DRAW!')
					setTimeout(function() {$("#ttt_table tbody tr td").html(""); }, 1500);
					turn.length = 0
				}
			}
		})
	}
});
