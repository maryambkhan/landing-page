import './App.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Video from './pages/Video';
import Photo from './pages/Photo';
import Home from './pages/Home';


function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/photo":
      component = <Photo />
      break
    case "/video":
      component = <Video />
      break
  }
  return (
    <>
      <Navbar />
      {component}
      <Footer />
    </>
  )
}
export default App;
