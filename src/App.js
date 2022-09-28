import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Body from './Component/Body/Body';
import Questions from './Component/Questions/Questions';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Body></Body>
      <Questions></Questions>
      <Footer></Footer>
    </div>
  );
}

export default App;
