import { Form, Link, redirect, } from "react-router-dom"
export default function CreatePost() {    
    return (
    <Form method="post">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title"required />
        <label htmlFor="body">Body</label>
        <input type="text" id="body" name="body" required />
        <Link to={'..'}>cancel</Link>
        <button type="submit">submit</button>
    </Form>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({request}: { request: Request }){
    const formentry = await request.formData()
    const postdata = Object.fromEntries(formentry)
    const result = await fetch('http://localhost:3333/',{
        method: 'POST',
        body: JSON.stringify(postdata),
        headers: {
            'Content-Type': 'application/json'
            }
        })
    if(result.ok){
        console.log('data uploaded successfully')
    }else {
        console.error('Internal Server Error')
    }    
    return redirect('/')   
}