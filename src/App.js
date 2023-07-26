import './App.css';
import ScrollBar from './components/ScrollBar';
import ScrollUp from './components/ScrollUp';
import NiceMesses from './components/NiceMesses';
import Link from './components/Link';

function App() {
  return (
    <div className="App">
      <ScrollBar/>
      <Link/>
      <NiceMesses/>
      <ScrollUp/>
    </div>
  );
}

export default App;
