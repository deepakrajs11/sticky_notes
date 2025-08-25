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
    <div>
        <Link to={`/${props.id}`}>{props.title}</Link>
        <p>{props.body}</p>
        <button type="button" onClick={handleDeletePost}>delete</button>
    </div>
  )
}
