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
      <Separation
      color={"#04AA6D"}
      shadowColor={"0px 0px 5px 0px #04aa6d8f"}
      direction={"right"}
      />
      <Password/>
      <Separation
      color={"#04AA6D"}
      shadowColor={"0px 0px 5px 0px #04aa6d8f"}
      direction={"right"}
      />
      <Unicorn/>
      <ScrollUp/>
      <div className="buttom-page"></div>
    </div>
  );
}

export default App;
