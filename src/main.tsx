import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Posts, { loader } from './routes/Posts.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RouteLayout from './routes/route-layout.tsx'
import CreatePost, { action } from './components/create-post.tsx'

const router= createBrowserRouter([
  {path: '/', element: <RouteLayout />, children: [
    {path: '/', element: <Posts />, loader: loader},
    {path: '/create-post', element: <CreatePost />, action: action}
  ]}
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
