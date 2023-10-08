import Link from 'next/link'
import styles from "./WeatherCard.module.css"

const Header =  () => (
    <header>
        <nav className={styles.headerBox}>
            <Link href='Boston'>Boston</Link>
            <Link href='New York'>New York</Link>
            <Link href='Los Angeles'>Los Angeles</Link>
            <Link href='Paris'>Paris</Link>
        </nav>
    </header>
);

export default Header;