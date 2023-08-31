import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
    return (
       
       <div className={styles.container}>
          <PageTitle>About</PageTitle>
            <div>
            <p className={styles.subtitle}>A simple</p>
            </div>
        </div>
            )
}

export default About;