import {encode, decode} from 'bottomify';
import './App.css';

function App() {
  return (
    <div className="App">
      { encode('Hello, World!') }
    </div>
  );
}

export default App;
