import styles from './Card.module.scss';
import clsx from 'clsx';
import { removeCard } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';


const Card = props => {
    
    const dispatch = useDispatch();
   const handleRemove = (cardsId) => {
    const string =cardsId.toString()
  dispatch(removeCard(string));
 
   };


    return (
        <li className={styles.card}>
            {props.title}
            <div>
            <button className={clsx(styles.star, props.isFavorite && styles.isFavorite)} 
            onClick={props.onClick}><i className= "fa fa-star o"></i></button>
            <button className={styles.bin} onClick ={()=>handleRemove(props.id)}><i className= "fa fa-trash"></i></button>
            </div>
        </li>
    );
};

export default Card;



