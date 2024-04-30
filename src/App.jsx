import { useState } from 'react'
import Player from './components/Player.jsx'
import Board from './components/Board.jsx'
import GameOver from './components/GameOver.jsx'
import { winningFields } from './winningFields.js'

let initBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
]

let counter = 0

function App() {
	const [board, setBoard] = useState(initBoard)
	const [player, setPlayer] = useState({
		X: 'Player 1',
		O: 'Player 2',
	})

	function updatePlayerName(symbol, name) {
		setPlayer(prev => ({
			...prev,
			[symbol]: name,
		}))
	}

	let symbol 
	function updateBoard(row, col) {
		counter = counter + 1
		if (counter % 2 === 1) {
			symbol = 'X'
		} else {
			symbol = 'O'
		}
		setBoard(prev => {
			const newBoard = [...prev.map(arr => [...arr])]
			newBoard[row][col] = symbol
			return newBoard
		})
	}

	let winner = null

	for (let i=0; i< winningFields.length; i++){
		const firstField = board[winningFields[i][0][0]][winningFields[i][0][1]]
		const secondField = board[winningFields[i][1][0]][winningFields[i][1][1]]
		const thirdField = board[winningFields[i][2][0]][winningFields[i][2][1]]

		if (firstField && firstField === secondField && firstField === thirdField) {
			winner = player[firstField]
		}
	}
	const draw = counter === 9 && !winner

	function handleReset() {
		setBoard([[null, null, null], [null, null, null], [null, null, null]])
		counter = 0;
	}

	return (
		<main className='flex justify-center items-center h-screen bg-bgcolor'>
			<div className=' relative bg-boardcolor p-4 rounded-lg'>
				<div className='flex flex-row justify-between mb-4'>
					<Player activePlayer={counter % 2 === 0} symbol='X' initialPlayerName='Player 1' onChangePlayerName={updatePlayerName} />
					<Player activePlayer={counter % 2 === 1} symbol='O' initialPlayerName='Player 2' onChangePlayerName={updatePlayerName} />
				</div>
				<Board board={board} onClickButton={updateBoard} />
				{(winner || draw) && <GameOver winner={winner} onRestart={handleReset}/>}
			</div>
		</main>
	)
}

export default App
