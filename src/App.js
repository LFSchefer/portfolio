import './App.css';
import ScrollBar from './components/ScrollBar';
import ScrollUp from './components/ScrollUp';
import NiceMesses from './components/NiceMesses';

function App() {
  return (
    <div className="App">
      <ScrollBar/>
      <NiceMesses/>
      <ScrollUp/>
    </div>
  );
}

export default App;
