import styles from './NotFound.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const NotFound = () => {
    return (
       
       <div className={styles.container}>
          <PageTitle>Not Found</PageTitle>
            <div>
            <p className={styles.subtitle}>Error 404</p>
            </div>
        </div>
            )
}

export default NotFound;