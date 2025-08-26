import { useLoaderData } from "react-router-dom";
import Post from "./post";
type post = {
    title: string;
    body: string;
    id: number;
    };
export default function PostList() {
  const posts= useLoaderData()
  return (
    <>
    {posts.length > 0 ?
    <ul style={{
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",   // space between cards
  padding: 0,
  margin: 0,
  listStyle: "none"
}}>
  {posts.map((post: post) => (
    <Post 
      key={post.id} 
      id={post.id} 
      title={post.title} 
      body={post.body} 
    />
  ))}
</ul>
 :
    <p style={{
    textAlign: "center",
    marginTop: "40px",
    color: "#555",
    fontSize: "25px",
    fontStyle: "italic"
  }}>No post yet</p>}
    </>
  )
}
