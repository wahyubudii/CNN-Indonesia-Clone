import { Link } from "react-router-dom"

export default function Navitem({title, link}) {
    return (
      <Link to={`${link}`} className="px-2 text-base text-white opacity-90">{title}</Link>
    )
}