import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';
import { getFilteredCards } from '../../redux/store';
import { useState } from 'react';

const Column = props => {
  const cards = useSelector(state => getFilteredCards(state, props.id));
  const dispatch = useDispatch();
   const [id, setId] = useState('');
   console.log("id", id);
   const handleClick = (cardId) => {
   setId (cardId);
  dispatch(toggleCardFavorite({id}));
      console.log('button clicked', id, );
      setId ('');
   };

    return <article className={styles.column}>
        <h2 className={styles.title}> <span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2>
        <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} title={card.title} onClick={()=>handleClick(card.id)} />)}
      </ul>
      <CardForm columnId={props.id} />
      </article>


}

export default Column;