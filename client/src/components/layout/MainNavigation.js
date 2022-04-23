import { Link } from 'react-router-dom';

import styles from './MainNavigation.module.css';

const MainNavigation = () => {

    return (
        <header className={styles.header}>
            <img className={styles.logo} src='/project-management.png' alt='Management System'/>
            <nav>
                <ul className={styles.nav_links}>
                    <li>
                        <Link className={styles.a} to='/'><button>Home1</button></Link>
                    </li>
                    <li>
                        <Link className={styles.a} to='/'><button>Home2</button></Link>
                    </li>
                    <li>
                        <Link className={styles.a} to='/'><button>Home3</button></Link>
                    </li>
                    <li>
                        <Link className={styles.a} to='/'><button>Home4</button></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;