import logo from './logo.svg';
import './App.css';
import './Base.css';

function App() {
  return (
   <div className="flex-column full-height">
      <header className="App-header fontSize-m background-dark padding_right-m">
         <nav className="margin_top-s margin_bottom-s">
            <a className="margin_right-s color-light" href="">один</a>
            <a className="margin_right-s color-light" href="">два</a>
         </nav>
      </header>
      <div className="App flex-grow-1 flex-shrink-1">
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
      </div>
      <footer>
         <div className="fontSize-m background-dark color-light padding_left-m">Наши контакты: 45-0-29</div>
      </footer>
   </div>
  );
}

export default App;
