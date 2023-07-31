import './App.css';
import ScrollBar from './components/ScrollBar';
import ScrollUp from './components/ScrollUp';
import NiceMesses from './components/NiceMesses';
import Link from './components/Link';
import Password from './components/Password';
import Unicorn from './components/Unicorn';
import Separation from './components/Separation';

function App() {
  return (
    <div className="App">
      <ScrollBar/>
      <Link/>
      <NiceMesses/>
      <Separation/>
      <Password/>
      <Separation/>
      <Unicorn/>
      <ScrollUp/>
      <div className="buttom-page"></div>
    </div>
  );
}

export default App;
