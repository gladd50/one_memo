import Logo from "../Logo/Logo"
import Button from "../Button/Button"
import "./StartScreenStyle.css"

type StartScreenProps = {
  setDifficulty: (val: number) => void
  handleLoad: (val: string) => void
  handleEnd: () => void
}

export default function StartScreen(props: StartScreenProps) {
  const { setDifficulty, handleLoad, handleEnd } = props

  return (
    <div className="start-screen">
      <Logo backHome={handleEnd} screen="start"></Logo>
      <div className="btn-cont">
        <Button
          handleLoad={handleLoad}
          difficulty={6}
          selectDifficulty={setDifficulty}
          value="Easy"
        ></Button>
        <Button
          handleLoad={handleLoad}
          difficulty={9}
          selectDifficulty={setDifficulty}
          value="Medium"
        ></Button>
        <Button
          handleLoad={handleLoad}
          difficulty={12}
          selectDifficulty={setDifficulty}
          value="Hard"
        ></Button>
      </div>
    </div>
  )
}
