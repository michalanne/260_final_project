import logo from './images/churchLogo.png';
import lightRay from './images/lightRays.png'
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
        <div className='lightRay'>
          <img src={lightRay}/>
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Libraries" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.churchofjesuschrist.org/study/scriptures?lang=eng&platform=web">Scriptures</NavDropdown.Item>
              <NavDropdown.Item href="https://www.churchofjesuschrist.org/study/general-conference?lang=eng">General Conference</NavDropdown.Item>
              <NavDropdown.Item href="https://www.churchofjesuschrist.org/study/come-follow-me?lang=eng">Come Follow Me</NavDropdown.Item>
              <NavDropdown.Item href="https://www.churchofjesuschrist.org/study/lib?lang=eng&platform=web">Gospel Library</NavDropdown.Item>
              <NavDropdown.Item href="https://www.churchofjesuschrist.org/media?lang=eng">Gospel Media</NavDropdown.Item>
              <NavDropdown.Item href="https://www.churchofjesuschrist.org/music/library?lang=eng">Music Library</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Serve" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.churchofjesuschrist.org/callings?lang=eng">Callings</NavDropdown.Item>
              <NavDropdown.Item href="https://www.churchofjesuschrist.org/topics/serve-and-teach/volunteer-time-and-talent?lang=eng">Volunteer and Serve</NavDropdown.Item>
              <NavDropdown.Item href="https://www.churchofjesuschrist.org/temples?lang=eng">Temples</NavDropdown.Item>
              <NavDropdown.Item href="https://www.churchofjesuschrist.org/family-history?lang=eng">Family History</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Living Life" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.churchofjesuschrist.org/inspiration?lang=eng">Inspiration</NavDropdown.Item>
              <NavDropdown.Item href="https://www.churchofjesuschrist.org/topics/families-and-individuals/lifes-challenges/hope-and-help?lang=eng">Life Help</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.churchofjesuschrist.org/comeuntochrist/believe?lang=eng">Beliefs</NavDropdown.Item>
              <NavDropdown.Item href="https://www.churchofjesuschrist.org/comeuntochrist/belong?lang=eng">Worship With Us</NavDropdown.Item>
              <NavDropdown.Item href="https://newsroom.churchofjesuschrist.org/">News</NavDropdown.Item>
              <NavDropdown.Item href="https://www.churchofjesuschrist.org/learn/about-us?lang=eng">About Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;