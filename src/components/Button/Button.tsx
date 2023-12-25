import "./ButtonStyle.css"

type ButtonProps = {
  value: string
  selectDifficulty: (val: number) => void
  difficulty: number
  handleLoad: (val: string) => void
}

export default function Button(props: ButtonProps) {
  const { value, selectDifficulty, difficulty, handleLoad } = props
  return (
    <button
      className="btn"
      onClick={() => {
        selectDifficulty(difficulty)
        handleLoad("loading")
      }}
    >
      {value}
    </button>
  )
}
