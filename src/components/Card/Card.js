import styles from './Card.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

const Card = props => {
    


    return (
        <li className={styles.card}>{props.title}<button className={clsx(styles.star, props.isFavorite && styles.isFavorite)} onClick={props.onClick}><i className= "fa fa-star o"></i></button></li>
    );
};

export default Card;

// return <input className={styles.input} value={props.value} onChange={props.onChange} placeholder={props.placeholder} type="text" />
// };