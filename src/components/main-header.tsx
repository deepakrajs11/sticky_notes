import { Link } from "react-router-dom"
export default function MainHeader() {
  return (
    <header>
        <h1>My Blog</h1>
        <Link to={'/create-post'} >Create Post</Link>
    </header>
  )
}
