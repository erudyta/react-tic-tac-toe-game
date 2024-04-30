import { useState, useRef } from 'react'

export default function Player({ symbol, initialPlayerName, onChangePlayerName, activePlayer }) {
	const inputRef = useRef()

	const [player, setPlayer] = useState({
		name: initialPlayerName,
		editable: false,
		isValidName: true,
		errNumber: 0,
	})

	function handleEditPlayer() {
		setPlayer(prev => ({
			...prev,
			editable: true,
		}))

		if (player.editable) {
			let enteredName = inputRef.current.value
			if (enteredName.trim() == '') {
				setPlayer(prev => ({
					...prev,
					editable: true,
					isValidName: false,
					errNumber: 1,
				}))
			} else if (enteredName.length > 12) {
				setPlayer(prev => ({
					...prev,
					editable: true,
					isValidName: false,
					errNumber: 2,
				}))
			} else {
				enteredName = enteredName.toLowerCase()
				enteredName = enteredName.charAt(0).toUpperCase() + enteredName.slice(1)
				setPlayer(prev => ({
					...prev,
					name: enteredName,
					editable: false,
					isValidName: true,
					errNumber: 0,
				}))
					onChangePlayerName(symbol, enteredName)
			}
		}
	}

	return (
		<div className='relative text-white p-1'>
			<p className={`text-xl mb-3 p-1 ${activePlayer ? 'border-b-2 border-primarycolor' : ''}`}>
				{player.editable ? (
					<input
						type='text'
						ref={inputRef}
						className={`${!player.isValidName ? 'border-2 border-red-500' : ''} text-black mr-2 w-40`}
					/>
				) : (
					<span className='mr-2'>{player.name}</span>
				)}
				<button
					className='text-secondarycolor transition-colors duration-300 text-base hover:text-white'
					onClick={handleEditPlayer}>
					{player.editable ? 'Save' : 'Edit'}{' '}
				</button>
			</p>
			{!player.isValidName && (
				<p className='absolute top-11 left-2 text-red-500 text-xs'>
					{`${player.errNumber === 1 ? 'Name cannot be empty' : ''}${
						player.errNumber === 2 ? 'Name cannot have more than 12 characters' : ''
					}`}
				</p>
			)}
			<p>Symbol: {symbol}</p>
		</div>
	)
}
