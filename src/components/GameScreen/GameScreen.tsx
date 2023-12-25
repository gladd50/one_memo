import Logo from "../Logo/Logo"
import "./GameScreenStyle.css"
import Score from "../Score/Score"
import Card from "../Card/Card"
import charType from "../../utils/charType"
import { useState } from "react"
import EndScreen from "../EndScreen/EndScreen"

type GameScreenProps = {
  handlePlay: (val: charType, changeFlip: (arg: boolean) => void) => void
  handleOut: () => void
  handleScreen: (val: string) => void
  charDisplay: charType[]
  score: number
  bestScore: number
  endScore: number
  endState: string
}

export default function GameScreen(props: GameScreenProps) {
  const {
    charDisplay,
    score,
    bestScore,
    endScore,
    handlePlay,
    endState,
    handleOut,
    handleScreen,
  } = props
  const [isFliped, setIsFliped] = useState<boolean>(false)

  function handleFlip(val: boolean) {
    setIsFliped(val)
  }
  return (
    <>
      <div className="header-game">
        <Logo backHome={handleOut} screen="game" />
        <Score currentScore={score} bestScore={bestScore}></Score>
      </div>
      <h3 className="score-progress">
        {score} / {endScore}
      </h3>
      <main>
        {charDisplay.map((char) => (
          <Card
            handleFlip={handleFlip}
            isFliped={isFliped}
            key={char.id}
            char={char}
            handlePlay={handlePlay}
          ></Card>
        ))}
      </main>
      {endState !== "play" && (
        <EndScreen
          state={endState}
          onQuit={handleOut}
          onRestart={handleScreen}
        ></EndScreen>
      )}
    </>
  )
}
