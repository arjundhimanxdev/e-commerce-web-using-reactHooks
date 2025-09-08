import { Outlet } from "react-router-dom"
import { AppHeader, AppFooter } from "./components"


const AppLayoutPage = () => {
  return (
    <>
    <AppHeader/>
    <Outlet/>
    <AppFooter/>
    </>
  )
}

export default AppLayoutPage