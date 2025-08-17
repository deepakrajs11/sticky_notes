export default function post(props : {title: string, body: string, handleDeletePost: () => void}) {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        <button type="button" onClick={props.handleDeletePost}>delete</button>
    </div>
  )
}
