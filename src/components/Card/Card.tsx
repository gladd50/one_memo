import "./CardStyle.css"
import logo from "../../assets/one_memo_logo.png"
import charType from "../../utils/charType"
import { useEffect } from "react"

type CardProps = {
  char: charType
  handlePlay: (val: charType, changeFlip: (arg: boolean) => void) => void
  isFliped: boolean
  handleFlip: (arg: boolean) => void
}

export default function Card(props: CardProps) {
  const { char, handlePlay, isFliped, handleFlip } = props
  useEffect(() => {
    setTimeout(() => {
      handleFlip(true)
    }, 500)
  }, [isFliped, handleFlip])

  return (
    <div
      className={`card ${isFliped && "flip"}`}
      onClick={() => handlePlay(char, handleFlip)}
    >
      <div className="inner-card">
        <div className="front-card">
          <img src={char.url} alt={char.name} className="char" />
          <h3 className="char-name">{char.name}</h3>
        </div>
        <div className="back-card">
          <img src={logo} alt="One Piece" />
        </div>
      </div>
    </div>
  )
}
