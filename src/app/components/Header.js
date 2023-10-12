import Link from 'next/link'
import styles from "./WeatherCard.module.css"

const Header =  () => (
    <header>
        <nav className={styles.headerBox}>
            <Link href='Moca'>Moca</Link>
            <Link href='New York'>New York</Link>
            <Link href='California'>California</Link>
            <Link href='Paris'>Paris</Link>

        </nav>
    </header>
);

export default Header;