import styles from './styles.module.css';
import { BsJournalBookmark } from 'react-icons/bs';
import Form from '../Form';
import Contacts from '../Contacts';
import { StatusBar } from '../StatusBar/StatusBar';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <h1>
        Phonebook <BsJournalBookmark size={35} className={styles.icon} />
      </h1>
      <Form />
      <h2>Contacts</h2>
      <StatusBar />
      <Contacts />
    </div>
  );
};

export default App;
