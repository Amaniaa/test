import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
    <Header text={"Company "}/>
    <Header/>
    <Footer/>
    </div>
  );
}

export default App;
