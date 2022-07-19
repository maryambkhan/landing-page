import logo from './logo.svg';
import hero from './hero.jpg';
import stormi from './stormi.jpg';
import love from './love.jpg';
import purito from './purito.jpg';
import comp from './comp.jpg';
import sleep from './sleep.jpg';
import fam from './fam.jpg';
import bag from './bag.jpg';
import './App.css';

function Header() {
  return (
    <header className="App-head">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Stormi's Adventures</p>
      </div>
      <nav className="App-nav">
        <ul>
          <li>Photos</li>
          <li>Videos</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div className="App-main">
      <img src={hero} className="App-hero" alt="stormi" />
      <img src={hero} className="App-hero" alt="stormi" />
      <h1 className="App-heading">Baby Stormi</h1>
      <p className="App-heading">Loves salman, Loves naps, Little shy But friendly</p>
      <div className="App-grid">
        <div className="sq-1">
          <img src={sleep} alt="stormi" />
        </div>
        <div className="sq-2">
          <img src={purito}   alt="stormi" />
        </div>
        <div className="sq-3">
          <img src={comp} alt="stormi" />
        </div>
        <div className="sq-4">
          <img src={stormi}  alt="stormi" />
        </div>
        <div className="sq-5">
          <img src={love} alt="stormi" />
        </div>
        <div className="sq-6">
          <img src={fam} alt="stormi" />
        </div>
        <div className="sq-7">
        <img src={bag} alt="stormi" />
        </div>

      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="App-footer">
      <p>2022 Maryam Khan</p>
    </footer>
  )
}

function Page() {
  return (
    <div className="App-page">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}
export default Page;
