import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'Redux/filterSlice';
import{getFilter } from 'Redux/selectors'
import styles from './styles.module.css';


// const Filter = ({ onFilterInput }) => {
//   const [filter, setFilter] = useState('');
//   useEffect(() => {
//     onFilterInput(filter);
//   }, [filter, onFilterInput]);
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onChange = e => dispatch(setFilter(e.currentTarget.value));
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Find contacts by name</p>
        <input
        name="filter"
        value={filter}
        onChange={onChange}
        placeholder="Enter name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  
      />
    </div>
  );
};


export default Filter;
