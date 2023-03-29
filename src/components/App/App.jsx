import styles from './styles.module.css';
import Form from '../Form';
import Contacts from '../Contacts';
import { StatusBar } from '../StatusBar/StatusBar';
import { Header } from '../Header/Header';
const App = () => {
  return (
    <div className={styles.wrapper}>
       <Header />
      <Form />
      <h2>Contacts</h2>
      <StatusBar />
      <Contacts />
    </div>
  );
};

export default App;
