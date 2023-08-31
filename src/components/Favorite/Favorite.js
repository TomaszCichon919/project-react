import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
    return (
       
       <div className={styles.container}>
       <PageTitle>Favorite</PageTitle>
            <div>
            <p className={styles.subtitle}>A simple</p>
            </div>
        </div>
            )
}

export default Favorite;