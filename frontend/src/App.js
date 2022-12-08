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
        <footer class="footer">
        <p class="footer-info"><a href="https://github.com/michalanne/260_final_project">Michal Stone and Bryce Wall</a></p>
        <p class="footer-info-bottom-right">CS 260</p>
    </footer>
    </div>
    </>
  );
}

export default App;