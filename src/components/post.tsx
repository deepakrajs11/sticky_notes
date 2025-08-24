import { useNavigate } from "react-router-dom"

export default function Post(props: {title: string, body: string}) {
    const navigate= useNavigate()
    const handleDeletePost = async () => {
      const title = props.title
      const body = props.body
    try {
    const res = await fetch('http://localhost:3333/', {
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
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        <button type="button" onClick={handleDeletePost}>delete</button>
    </div>
  )
}
