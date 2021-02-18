import {encode, decode} from 'bottomify';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Bottom Text</h1>
      <textarea id='top-text' spellCheck='false' autoComplete='false' placeholder='top text' onInput={() => translateToBottom()}></textarea>
      <br />
      <br />
      <textarea id='bottom-text' spellCheck='false' autoComplete='false' placeholder='bottom text' onInput={() => translateToTop()}></textarea>
    </div>
  );
}

function translateToBottom() {
  if (document.getElementById('bottom-text') == null || document.getElementById('top-text') == null) {
    return; 
  }
  document.getElementById('bottom-text').value = encode(document.getElementById('top-text').value);
}

function discordToEmoji(text) {
  
}

function translateToTop() {
  if (document.getElementById('bottom-text') == null || document.getElementById('top-text') == null) {
    return; 
  }
  document.getElementById('top-text').value = decode(document.getElementById('bottom-text').value);
}


export default App;
