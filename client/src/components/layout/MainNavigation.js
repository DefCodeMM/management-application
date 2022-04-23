import { Link } from 'react-router-dom';

import styles from './MainNavigation.module.css';

const MainNavigation = () => {

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Management System</div>
            <nav>
                <ul className={styles.nav_links}>
                    <li>
                        <Link className={styles.a} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={styles.a} to='/'>Home2</Link>
                    </li>
                    <li>
                        <Link className={styles.a} to='/'>Home3</Link>
                    </li>
                </ul>
            </nav>
            <Link to='/'><button>Contact</button></Link>
        </header>
    )
}

export default MainNavigation;