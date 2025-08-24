import { useLoaderData } from "react-router-dom";
import Post from "./post";
type post = {
    title: string;
    body: string;
    };
export default function PostList() {
  const posts= useLoaderData()
  return (
    <>
    {posts.length > 0 ?
    <ul>
    {posts.map((post:post) => <Post key={post.body} title={post.title} body={post.body}/>)}
    </ul> :
    <p>No post yet</p>}
    </>
  )
}
