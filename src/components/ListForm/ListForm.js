import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput'
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';


const ListForm = (props) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({listId: props.listId, title, description }));
        setTitle('');
        setDescription('');
};

	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <span className={styles.textField}>Title:</span>
             <TextInput placeholder="title..." value={title} onChange={e => setTitle(e.target.value)}>
             </TextInput>
             <span className={styles.textField}>Icon:</span>
             <TextInput placeholder="description..." value={description} onChange={e => setDescription(e.target.value)}>
             </TextInput>
            <Button>Add List</Button>
        </form>
	);
};

export default ListForm;