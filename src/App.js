import logo from './logo.svg';
import './App.css';
import { Hola } from './Hola';
import { Exam } from './exam';
import { Usuarios } from './Array';
import { Exercise } from './exercise';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hello world</p>
        <Hola nombre="Alicia" bol={true} />
        <Exercise />
        <Exam />
        <Usuarios />
      </header>
    </div>
  );
}

export default App;
