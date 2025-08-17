export default function MainHeader(props: {handleCreatePost: () => void}) {
  return (
    <header>
        <h1>My Blog</h1>
        <button onClick={props.handleCreatePost}>Create Post</button>
    </header>
  )
}
