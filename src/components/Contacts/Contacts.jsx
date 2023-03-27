import styles from './styles.module.css';
import { TiUserDeleteOutline } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact} from 'Redux/contactsSlice';
import { getFilter,getItems } from 'Redux/selectors';
import userIcon from '../../images/user.png';
import telephoneIcon from '../../images/telephone.png';
import { Notification } from 'components/Notification/Notification';
const Contacts = () => {
  const contacts = useSelector(getItems );
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
 
  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  let rendered = filter === '' ? contacts: filteredContacts();
 
  return (
    <>
        {contacts.length === 0 ? (
        <Notification message="No contacts yet" />
      ) : filter !== '' && rendered.length === 0 ? (
        <Notification message="No contacts found" />
      ) : (
      <ul className={styles.contactsList}>
        {rendered.map(({ name, id, number }) => (
          <li className={styles.listItem} key={id} id={id}>
              <img src={userIcon} alt="user icon" className={styles.user_icon} />
            <span className={styles.contactName}>{name}: </span>
            <span className={styles.phoneNumber}>{number}
            <a href={`tel:${number}`}>
            <img src={telephoneIcon} alt="telephone icon" className={styles.telephone_icon} />
              </a>
              </span>
            <button
              type="button"
              className={styles.buttons}
              onClick={() => dispatch(deleteContact(id))}
              aria-label="delete contact button"
            >
              <TiUserDeleteOutline size={20} />
            </button>
          </li>
        ))}
        </ul>
              )}
      
    </>
  );
};

export default Contacts;

