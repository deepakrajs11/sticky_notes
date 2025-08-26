import { Outlet } from "react-router-dom"
import MainHeader from "../components/main-header"
export default function RouteLayout() {
  return (
    <div  style={{height: '100vh', border: 'none', margin: 0}}>
      <MainHeader />  
      <Outlet />
    </div>
  )
}
