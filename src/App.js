import './App.css';
import ScrollBar from './components/ScrollBar';
import ScrollUp from './components/ScrollUp';
import NiceMesses from './components/NiceMesses';
import Link from './components/Link';
import Password from './components/Password';
import Unicorn from './components/Unicorn';
import Separation from './components/Separation';
import ReactComponents from './components/ReactComponents';
import ChatTracker from './components/ChatTracker'
// import ReactMiniGame from './components/ReactMinigame';

// TODO

// Refacto card => react comp
// Meme generator save png + custom import
//  password react nativ ?

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
      <ChatTracker/>
      <Separation
      color={"#04AA6D"}
      shadowColor={"0px 0px 5px 0px #04aa6d8f"}
      direction={"left"}
      multiway={true}
      />
      <Unicorn/>
      <Separation
      color={"#04AA6D"}
      shadowColor={"0px 0px 5px 0px #04aa6d8f"}
      direction={"left"}
      multiway={true}
      />
      <Password/>
      <Separation
      color={"#04AA6D"}
      shadowColor={"0px 0px 5px 0px #04aa6d8f"}
      direction={"left"}
      />
      {/* <ReactMiniGame/> */}
      <ReactComponents/>
      <ScrollUp/>
      <div className="buttom-page"></div>
    </div>
  );
}

export default App;
