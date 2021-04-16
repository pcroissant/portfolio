import photo from './assets/photo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="Header-Picture" alt="Photo d'identité" />
        <p className="Header-Text">
          <span className="Header-Text-Name">Pierrick Croissant</span><br/>Élève ingénieur
        </p>
      </header>
      <body className="App-body">
        Work in progress
      </body>
    </div>
  );
}

export default App;
