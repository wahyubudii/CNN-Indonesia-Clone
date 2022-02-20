import { Link } from "react-router-dom"

export default function Navitem({title, link}) {
    return (
      <Link to={`${link}`} className="px-2 text-sm text-white opacity-90">{title}</Link>
    )
}