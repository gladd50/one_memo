import logo from "../../assets/one_memo_loading.png"
import "./LoadingScreenStyle.css"

export default function LoadingScreen() {
  return (
    <div className="loading-cont">
      <img src={logo} alt="Luffy" className="loading-logo" />
      <p className="loading-text">Loading...</p>
    </div>
  )
}
