import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput'

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
};

	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <span className={styles.textField}>Title:</span>
             <TextInput placeholder="title..." value={title} onChange={e => setTitle(e.target.value)}>
             </TextInput>
             <span className={styles.textField}>Icon:</span>
             <TextInput placeholder="icon..." value={icon} onChange={e => setIcon(e.target.value)}>
             </TextInput>
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;