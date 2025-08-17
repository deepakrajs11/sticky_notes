import './App.css'
import PostList from './components/post-list'
import MainHeader from './components/main-header'
import { useState } from 'react'
function App() {
  const [isVisible, setIsVisible] = useState(true)
  const handleShowCreatePost = () => {
    return isVisible ? setIsVisible(false) : setIsVisible(true)
  }
  return (
    <>
    <MainHeader handleCreatePost={handleShowCreatePost}/>
      <PostList handleCreatePost={handleShowCreatePost} isVisible={isVisible} />
    </>
  )
}
export default App
