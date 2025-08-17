import { useState } from "react"
export default function CreatePost(props: {handleCancel: () => void, onAddPost: (postdata: {title: string, body:string}) => void}) {
   const [title, setTitle] = useState('')
   const [body, setBody] = useState('')
        const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const handleBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBody(e.target.value)        
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        props.handleCancel()
        const postdata = {
            title: title,
            body: body
        }
        props.onAddPost(postdata)
    }
    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" required id="title" onChange={handleTitleChange}/>
        <label htmlFor="body">Body</label>
        <input type="text" required id="body" onChange={handleBodyChange}/>
        <button type="button" onClick={props.handleCancel}>cancel</button>
        <button type="submit">submit</button>
    </form>
  )
}
