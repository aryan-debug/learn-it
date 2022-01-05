import styles from '../styles/Header.module.css'
import Link from 'next/link'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1><Link href="/">Learn.it</Link></h1>
            <nav>
                <ul className={styles.nav}>
                    <li><Link href="/posts">Posts</Link></li>
                    <li><Link href="/construction">Create</Link></li>
                    <li><Link href="/construction">Sign up</Link></li>
                    <li><Link href="/construction">About</Link></li>
                    <li><Link href="/construction">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header