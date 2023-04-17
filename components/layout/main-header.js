import Link from 'next/link'

import style from './main-header.module.css'
import DropMenu from './dropdown-menu'

function MainHeader() {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <Link href='/'>Simed Global</Link>
            </div>
            <nav className={style.navigation}>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <DropMenu />
                    </li>
                    <li>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader