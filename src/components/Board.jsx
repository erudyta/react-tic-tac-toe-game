export default function Board({ board, onClickButton }) {
	return (
		<div className='flex flex-col gap-3 items-center'>
			{board.map((row, rowIndex) => (
				<div key={rowIndex} className='flex gap-3'>
					{row.map((symbol, colIndex) => (
						<button
							disabled={symbol !== null}
							onClick={() => onClickButton(rowIndex, colIndex)}
							className='lg:w-40 lg:h-40 md:w-32 md:h-32 w-20 h-20 bg-secondarycolor text-6xl md:text-8xl font-rajdhani font-extrabold rounded-lg hover:scale-105 transition ease-in-out delay-100'
							key={colIndex}>
								{symbol !== null && <span className="animate-shake block">{symbol}</span>}					
						</button>
					))}
				</div>
			))}
		</div>
	)
}
