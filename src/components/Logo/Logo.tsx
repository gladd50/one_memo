import logo from "../../assets/one_memo_logo.png"
import "./LogoStyle.css"

type LogoProps = {
  screen: string
  backHome: () => void
}

export default function Logo(props: LogoProps) {
  const { screen, backHome } = props
  return (
    <img
      src={logo}
      alt="One piece"
      className={`logo logo-${screen}`}
      onClick={backHome}
    />
  )
}
