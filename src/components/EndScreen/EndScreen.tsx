import "./EndScreenStyle.css"

type EndScreenProps = {
  onQuit: () => void
  onRestart: (val: string) => void
  state: string
}

export default function EndScreen(props: EndScreenProps) {
  const { onQuit, onRestart, state } = props
  return (
    <div className="modal-overlay">
      <div className="modal-cont">
        <img
          src={
            state === "lose"
              ? "https://media.giphy.com/media/RkhqXObfsfyhWwh4jL/giphy.gif"
              : "https://media.giphy.com/media/z8499G57Bne3m/giphy.gif"
          }
          alt=""
          className="end-img"
        />
        <h2>
          {state === "lose"
            ? "You failed to save Ace"
            : "You are succesful to save Ace"}
        </h2>
        <div className="modal-btn-cont">
          <button className="modal-btn" onClick={() => onRestart("loading")}>
            Restart
          </button>
          <button className="modal-btn" onClick={onQuit}>
            Quit
          </button>
        </div>
      </div>
    </div>
  )
}
