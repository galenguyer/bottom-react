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
  return text
    .replaceAll(':', '')
    .replaceAll('people_hugging', '🫂')
    .replaceAll('sparkling_heart', '💖')
    .replaceAll('sparkles', '✨')
    .replaceAll('pleading_face', '🥺')
    .replaceAll('heart', '❤️')
    .replaceAll('point_rightpoint_left', '👉👈')
    .replaceAll(' ', '')
}

function translateToTop() {
  if (document.getElementById('bottom-text') == null || document.getElementById('top-text') == null) {
    return; 
  }
  let bText = document.getElementById('bottom-text').value;
  if (bText.includes(':') || bText.includes('a')) {
    bText = discordToEmoji(bText);
    console.log(bText);
    document.getElementById('bottom-text').value = bText;
  }
  try { 
    document.getElementById('top-text').value = decode(bText);
  }
  catch {
    document.getElementById('top-text').value = 'Invalid bottom text';
  }
}


export default App;
