import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header >
      <nav className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ReactsFacts</p>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div className="App-main">
    <h1>Fun facts about React</h1>
    <ul className="App-list">
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
  )
}

function Footer () {
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
