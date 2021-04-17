import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Contacts from './components/Contacts';
import Header from './components/Header'

function App() {
  return (

    <div className="App">
      <Header branding="Contact Manager" />
      <div className="container">
        <Contacts />
        
      </div>
    </div>

  );
}

export default App;
