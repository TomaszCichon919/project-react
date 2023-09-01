import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearch } from '../../redux/store'
import { useSelector } from 'react-redux';



const SearchForm = () => {
    const searchString = useSelector(state => state.searchString);

 
    const [search, setSearch] = useState(searchString);

    const dispatch = useDispatch();
   
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearch(search));
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