import "./ScoreStyle.css"

type ScoreProps = {
  currentScore: number
  bestScore: number
}

export default function Score(props: ScoreProps) {
  const { currentScore, bestScore } = props
  return (
    <div className="score-cont">
      <h3>Score: {currentScore}</h3>
      <h3>Best Score: {bestScore}</h3>
    </div>
  )
}
