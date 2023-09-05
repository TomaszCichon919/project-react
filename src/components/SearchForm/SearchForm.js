import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearch } from '../../redux/searchStringRedux'
import { useSelector } from 'react-redux';



const SearchForm = () => {
    let searchString = useSelector(state => state.searchString);
 console.log('search', searchString);
    const [search, setSearch] = useState(searchString);

    const dispatch = useDispatch();
   
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearch(search));
        
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