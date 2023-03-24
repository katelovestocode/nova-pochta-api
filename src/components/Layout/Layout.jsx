import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Container } from "./Layout.styled"
import { Header, Navigation, NavItem } from "./Layout.styled"


export const Layout = () => {
    return (
        <Container>
            <Header> 
            <Navigation>
            <NavItem to="/" key={"home"} end> Home </NavItem>
            <NavItem to={"locations"} key={"locations"}> NP Locations </NavItem>
            </Navigation>
            </Header>

            <Suspense fallback={<div> Loading... </div>}>  <Outlet /> </Suspense>
    
        </Container>)

}