import { Link } from 'react-router-dom';

import styles from './MainNavigation.module.css';

const MainNavigation = () => {

    const LOGO = '/project-management.png'

    return (
        <header className={styles.header}>
            <img className={styles.logo} src={LOGO} alt='Management System'/>
            <nav>
                <ul className={styles.nav_links}>
                    <li>
                        <Link className={styles.a} to='/'><button>Home</button></Link>
                    </li>
                    <li>
                        <Link className={styles.a} to='/kanban'><button>Kanban</button></Link>
                    </li>
                    <li>
                        <Link className={styles.a} to='/teams'><button>Teams</button></Link>
                    </li>
                    <li>
                        <Link className={styles.a} to='/dashboard'><button>Dashboard</button></Link>
                    </li>
                    <li>
                        <Link className={styles.a} to='/login'><button>Login</button></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;