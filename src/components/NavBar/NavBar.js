import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
       <div className={styles.container}>
     
            <a href ='/' className={styles.taskicon}><i className= "fa fa-tasks"></i></a>

            <div className = {styles.navlist}>
                <a href ='/'>Home</a>
                <a href = '/favorite'>Favorite</a>
                <a href ='/about'>About</a>
            </div>
        </div>
            </nav>
            )
}

export default NavBar;