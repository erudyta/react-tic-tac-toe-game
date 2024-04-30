//absolute  top-0 left-0 flex w-full h-full flex-col text-white bg-black/90 items-center justify-center gap-8 rounded-lg text-xl
export default function GameOver({ winner, onRestart }) {
	return (
		<div className='absolute animate-gameover flex flex-col text-white bg-black/90 items-center justify-center gap-8 rounded-lg text-xl'>
            <p>The game is over!</p>
            {winner && <p><span className="text-primarycolor font-extrabold">{winner}</span> has won!</p>}
            {!winner && <p>The game ended in a draw</p>}
            <button className='py-1 px-3 border-2 bg-primarycolor rounded-lg hover:text-primarycolor hover:border-primarycolor hover:bg-white transition-all delay-100' onClick={onRestart}>Rematch</button>
        </div>
	)
}
