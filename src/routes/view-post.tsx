import { Link, useLoaderData, type LoaderFunctionArgs } from "react-router-dom"

export default function ViewPost(){
    const post = useLoaderData()
    return(
        <>
        <h1>{post.title}</h1>
        <h2>{post.body}</h2>
        <Link to={'..'}>Back</Link>
        </>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({params}: LoaderFunctionArgs){
    if(params.id){
    const result = await fetch('http://localhost:62323/' + params.id)
    const data = await result.json()
    console.log(data.post)    
    return data.post}
    console.error('id not present')
    throw new Response("Missing id", {status: 400})
}   