import Logo from './images/churchLogo.png';
import Menubar from './components/menubar';
import Body from './components/body';
import './App.css';

function App() {
  return (
    <>
    <div className="app-header">
      <div className="header">
        <img src={Logo} alt="church logo"/>
      </div>
      <Menubar />
    </div>
    <div className="body-container">
      <Body />
    </div>
    </>
  );
}

export default App;