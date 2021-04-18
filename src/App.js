import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Contacts from './components/Contacts';
import Header from './components/Header'
import { Provider } from './context';

function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />

        </div>
      </div>
    </Provider>
  );
}

export default App;
