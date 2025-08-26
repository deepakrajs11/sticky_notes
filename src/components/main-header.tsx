import { useState } from "react"
import { Link } from "react-router-dom"
export default function MainHeader() {
  const [hover, setHover] = useState(false)
  return (
    <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <h1 style={{color: "#2C3E50"}}>To Do</h1>
        <Link to={'/create-post'} style={{
        color: "white",
        backgroundColor: hover ? "#0056d6" : "#0584ab", // darker on hover
        border: "none",
        borderRadius: "8px",
        padding: "10px 20px",
        fontSize: "20px",
        cursor: "pointer",
        textDecoration: "none",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>Create Post</Link>
    </header>
  )
}
