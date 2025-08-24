import { Outlet } from "react-router-dom"
import MainHeader from "../components/main-header"
export default function RouteLayout() {
  return (
    <div>
      <MainHeader />  
      <Outlet />
    </div>
  )
}
