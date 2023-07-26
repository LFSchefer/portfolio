import './App.css';
import ScrollBar from './components/ScrollBar';
import ScrollUp from './components/ScrollUp';
import NiceMesses from './components/NiceMesses';
import Link from './components/Link';
import Password from './components/Password';


// TODO new anim for first loading "stack"

function App() {
  return (
    <div className="App">
      <ScrollBar/>
      <Link/>
      <NiceMesses/>
      <Password/>
      <ScrollUp/>
    </div>
  );
}

export default App;
