import { useEffect, useState } from "react"
import "./App.css"
import StartScreen from "./components/StartScreen/StartScreen"
import GameScreen from "./components/GameScreen/GameScreen"
import LoadingScreen from "./components/LoadingScreen/LoadingScreen"
import charInfo from "./utils/charInfo"
import charType from "./utils/charType"

function App() {
  const [screen, setScreen] = useState<string>("start")
  const [difficulty, setDifficulty] = useState<number>(0)
  const [charDisplay, setCharDisplay] = useState<charType[]>([])
  const [score, setScore] = useState<number>(0)
  const [bestScore, setBestScore] = useState<number>(0)
  const [endGame, setEndGame] = useState<string>("play")

  useEffect(() => {
    async function fetchData(char: string) {
      const api_key = "GSLiMg99Yi6ZUGDPtlBs1Rn2yrVu4GZN"
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${char}&api_key=${api_key}`
      )
      const gif = await res.json()
      return gif.data[0].images.original.url
    }
    if (difficulty !== 0 && screen === "loading") {
      const randomNum: number[] = []
      const selectedChar: charType[] = []
      while (randomNum.length < difficulty) {
        const num = Math.floor(Math.random() * 12)
        if (!randomNum.includes(num)) {
          randomNum.push(num)
          selectedChar.push(charInfo[num])
        }
      }
      Promise.all(randomNum.map((num) => fetchData(charInfo[num].query))).then(
        (urls) => {
          let index = 0
          urls.forEach((url) => {
            selectedChar[index].url = url
            selectedChar[index].isClicked = false
            index++
          })
          setCharDisplay(selectedChar)
          setScreen("game")
        }
      )
    }
  }, [screen, difficulty])

  function shuffleChar() {
    const randomNum: number[] = []
    const shuffledChar: charType[] = []
    while (randomNum.length < difficulty) {
      const num = Math.floor(Math.random() * difficulty)
      if (!randomNum.includes(num)) {
        randomNum.push(num)
        shuffledChar.push(charDisplay[num])
      }
    }
    setCharDisplay(shuffledChar)
  }

  function handleEndGame(state: string) {
    setEndGame(state)
    if (score > bestScore) {
      const newScore = score === difficulty - 1 ? difficulty : score
      setBestScore(newScore)
    }
    setScore(0)
  }

  function handleOut() {
    setEndGame("play")
    setBestScore(0)
    setScore(0)
    setScreen("start")
  }

  function handlePlay(char: charType, changeFlip: (arg0: boolean) => void) {
    if (char.isClicked) return handleEndGame("lose")
    char.isClicked = true
    setScore((prev) => prev + 1)
    if (score === difficulty - 1) return handleEndGame("win")
    changeFlip(false)
    shuffleChar()
  }

  function handleRestart(screen: string) {
    setScreen(screen)
    setEndGame("play")
  }

  return (
    <div className="app">
      {screen === "start" ? (
        <StartScreen
          handleEnd={handleOut}
          handleLoad={setScreen}
          setDifficulty={setDifficulty}
        ></StartScreen>
      ) : screen === "game" ? (
        <GameScreen
          handleScreen={handleRestart}
          handleOut={handleOut}
          handlePlay={handlePlay}
          charDisplay={charDisplay}
          score={score}
          bestScore={bestScore}
          endScore={difficulty}
          endState={endGame}
        ></GameScreen>
      ) : (
        <LoadingScreen></LoadingScreen>
      )}
    </div>
  )
}

export default App
