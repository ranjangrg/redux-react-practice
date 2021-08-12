// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Content from './components/content';

function App() {
  return (
    <div className="App">
        <Router>  {/* Important for navigation throughout the App */}
          <header className="App-header">
            <Navbar />
          </header>

          <Content /> 

          <Footer />
        </Router>
      
    </div>
  );
}

export default App;
