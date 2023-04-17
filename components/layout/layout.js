import style from './layout.module.css'
import MainHeader from './main-header'
import Footer from './footer'
import { Fragment } from 'react'

function Layout(props) {
    return (
        <Fragment>
            <MainHeader />
            <main>{props.children}</main>
            <Footer />
        </Fragment>
    )
}

export default Layout