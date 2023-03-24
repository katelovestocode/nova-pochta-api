import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Container } from "./Layout.styled"
import { Header, Navigation, NavItem } from "./Layout.styled"
import { Loader } from "../Loader/Loader";


export const Layout = () => {
    return (
        <Container>
            <Header> 
            <Navigation>
            <NavItem to="/" key={"home"} end> TTN Search </NavItem>
            <NavItem to={"locations"} key={"locations"}> Nova Pochta Locations </NavItem>
            </Navigation>
            </Header>

            <Suspense fallback={<Loader/>}>  <Outlet /> </Suspense>
    
        </Container>)

}