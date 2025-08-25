import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Posts, { loader as postsloader} from './routes/posts.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RouteLayout from './routes/route-layout.tsx'
import CreatePost, { action } from './components/create-post.tsx'
import ViewPost, {loader as postloader} from './routes/view-post.tsx'
const router= createBrowserRouter([
  {path: '/', element: <RouteLayout />, children: [
    {path: '/', element: <Posts />, loader: postsloader},
    {path: '/create-post', element: <CreatePost />, action: action},
    {path: ':id', element: <ViewPost />, loader: postloader}
  ]}
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
