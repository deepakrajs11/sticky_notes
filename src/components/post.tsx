import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
export default function Post(props: {title: string, body: string, id: number}) {
    const navigate= useNavigate()
    const handleDeletePost = async () => {
      const title = props.title
      const body = props.body
    try {
    const res = await fetch('http://localhost:62323/', {
      method: 'DELETE',
      body: JSON.stringify({ title, body }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (res.ok) { console.log('Successfully Deleted')
    }
  } catch (err) {
    console.error('Delete failed', err)
  }
  return navigate('/')
}
return (
    <div
      style={{
        background: "linear-gradient(135deg, #E6F0FF, #A2C2FF)",
        borderRadius: "12px",
        padding: "16px",
        margin: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        width: "280px",          // ✅ fixed consistent width
        minHeight: "200px",      // ✅ ensures cards stay uniform height
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      <Link
        to={`/${props.id}`}
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#0D1B2A",
          textDecoration: "none",
          textOverflow: "ellipsis", // ✅ prevents overflow
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
        title={props.title} // ✅ shows full title on hover
      >
        {props.title}
      </Link>

      <p
        style={{
          color: "#333333",
          marginTop: "8px",
          fontSize: "14px",
          lineHeight: "1.5",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 3, // ✅ limit body to 3 lines
          WebkitBoxOrient: "vertical",
        }}
        title={props.body} // ✅ tooltip for full body
      >
        {props.body}
      </p>

      <button
        type="button"
        onClick={handleDeletePost}
        style={{
          marginTop: "12px",
          padding: "8px 14px",
          backgroundColor: "#FF4C4C",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          alignSelf: "flex-start",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = "#D93636")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = "#FF4C4C")
        }
      >
        Delete
      </button>
    </div>
  )

}
