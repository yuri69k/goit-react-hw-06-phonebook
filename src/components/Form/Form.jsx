
import shortid from 'shortid';
import { useState, useEffect } from 'react';
import { TiUserAddOutline } from 'react-icons/ti';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'Redux/contactsSlice';
import{ getItems}from 'Redux/selectors'
// const Form = ({ contacts, addContact }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const [isDisabled, setIsDisabled] = useState(false);
const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(getItems);

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
      dispatch(addContacts(contact));
    // addContact(contact);
    reset();
  };

  useEffect(() => {
    setIsDisabled(false);
    const contactFinder = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (contactFinder) {
      setIsDisabled(true);
      Notify.warning(`${name} ${number} is already in contacts.`);
      reset();
    }
  }, [name, number, contacts]);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="john doe"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          required
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          placeholder="+380 33 333 3333"
          className={styles.phoneInputCountry}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          name="number"
          onChange={e => setNumber(e.currentTarget.value)}
          required
        />
      </label>

      <button
        className={styles.submitButton}
        type="submit"
        disabled={isDisabled}
      >
        add contact
        <TiUserAddOutline size={20} className={styles.icon} />
      </button>
    </form>
  );
};



export default Form;
