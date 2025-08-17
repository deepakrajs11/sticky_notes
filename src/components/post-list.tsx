import CreatePost from "./create-post";
import Post from "./post";
import Modal from './modal'
import { useEffect, useState } from "react";
export default function PostList(props: {handleCreatePost: () => void, isVisible : boolean}) {
    type post = {
    title: string;
    body: string;
    };
    const [posts, setposts] = useState<post[]>([])
    useEffect( ()=> {    const fetchPosts = async () => {
      try {
        const res = await fetch('http://localhost:3333/')
        if (!res.ok) throw new Error("Failed to fetch posts")
        const data: { posts: post[] } = await res.json()
        setposts(data.posts)
      } catch (err) {
        console.error("Error fetching posts:", err)
      }
    }
    fetchPosts()
  } , [] )
    const handleAddPost = async(postdata: post) => {
      await fetch('http://localhost:3333/',{
        method: 'POST' ,
        body: JSON.stringify(postdata) ,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setposts((existingPosts) => [...existingPosts, postdata]);
  }
  const handleDeletePost = async (title: string, body: string) => {
    try {
    const res = await fetch('http://localhost:3333/', {
      method: 'DELETE',
      body: JSON.stringify({ title, body }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (res.ok) {
      // remove from state so UI updates immediately
      setposts((prev) =>
        prev.filter((p) => !(p.title === title && p.body === body))
      )
    }
  } catch (err) {
    console.error('Delete failed', err)
  }
}

  return (
    <>
    {props.isVisible && 
    <Modal>
    <CreatePost handleCancel={props.handleCreatePost} onAddPost={handleAddPost}/>
    </Modal>
    }
    {posts.length > 0 ?
    <ul>
    {posts.map((post) => <Post key={post.body} title={post.title} body={post.body} handleDeletePost={() => handleDeletePost(post.title, post.body)}/>)}
    </ul> :
    <p>No post yet</p>}
    </>
  )
}
