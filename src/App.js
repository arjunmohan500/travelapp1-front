import logo from './logo.svg';
import './App.css';
import Addtravel from './components/Addtravel';
import ViewAll from './components/ViewAll';
import Search from './components/Search';

function App() {
  return (
   <div>
    <Addtravel/>
    <ViewAll/>
    <Search/>
   </div>
  );
}

export default App;
