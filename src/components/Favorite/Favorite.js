import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from './../Card/Card';
import { getFavoriteCards } from '../../redux/store';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const Favorite = () => {
    const favoriteCards = useSelector(state => getFavoriteCards(state));
    console.log('fav',favoriteCards);

    if(!favoriteCards.length) return <Navigate to="/" />
    return (
       
       <div className={styles.container}>
       <PageTitle>Favorite</PageTitle>
            <p className={styles.subtitle}>your favorite cards</p>
            <div className={styles.wrapper}>
            <article className={styles.column}>
        <ul className={styles.cards}>
        {favoriteCards.map(favoriteCard => <Card key={favoriteCard.id} title={favoriteCard.title} isFavorite = {favoriteCard.isFavorite} />)}
      </ul>
      </article>
      </div>
        </div>
            )
}

export default Favorite;