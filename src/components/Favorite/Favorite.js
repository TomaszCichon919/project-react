import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from './../Card/Card';
import { getFavoriteCards } from '../../redux/store';
import { useSelector } from 'react-redux';


const Favorite = () => {
    const cards = useSelector(state => getFavoriteCards(state));
    return (
       
       <div className={styles.container}>
       <PageTitle>Favorite</PageTitle>
            <div>
            <p className={styles.subtitle}>your favourite cards</p>
            <article className={styles.column}>
        <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} title={card.title} />)}
      </ul>
      </article>
            </div>
        </div>
            )
}

export default Favorite;