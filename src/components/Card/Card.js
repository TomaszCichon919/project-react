import styles from './Card.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { removeCard } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Card = props => {
    
    const dispatch = useDispatch();
   const handleRemove = (cardsId) => {
    const string =cardsId.toString()
    console.log("removeid", cardsId);
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

//onClick={()=>handleClick(props.id)}

