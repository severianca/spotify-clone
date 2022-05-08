import {Player} from './Player/Player';
import {Menu} from './Menu/Menu';
import {Routes, Route} from 'react-router-dom';
import {Home} from './Home/Home';
import {Search} from './Search/Search';
import {MyMediaLibrary} from './MyMediaLibrary/MyMediaLibrary';

import './App.css';
import './Base/Base.css';

function App() {
  return (
   <div className="flex-column full-height">
      <div className="flex-grow-1 flex-shrink-1 flex-row">
         <Menu/>
         <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/myMediaLibrary" element={<MyMediaLibrary/>}/>
         </Routes>
      </div>
      <footer>
         <Player/>
      </footer>
   </div>
  );
}

export default App;
