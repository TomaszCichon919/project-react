import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
       <div className={styles.container}>
     
            <a href ='/' className={styles.taskicon}><i className= "fa fa-tasks"></i></a>

            <div className = {styles.navlist}>
            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
            to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
            to="/favorite">Favorite</NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
            to="/about">About</NavLink>

            </div>
        </div>
            </nav>
            )
}

export default NavBar;