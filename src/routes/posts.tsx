import PostList from '../components/post-list'
import { Outlet } from 'react-router-dom'
function Posts() {
  return (
    <>
    <Outlet />
    <PostList />
    </>
  )
}
export default Posts

// eslint-disable-next-line react-refresh/only-export-components
export async function loader(){
    const res = await fetch('http://localhost:62323')
    const data= await res.json()
    return data.posts
}
