import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {
    let searchString = useSelector(state => state.searchString);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
   
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCH', payload: searchString = search});
        setSearch('');
    };
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..."  value={search} onChange={e => setSearch(e.target.value)}/>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

export default SearchForm;