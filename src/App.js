import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Body from './Component/Body/Body';
import Questions from './Component/Questions/Questions';
import Footer from './Component/Footer/Footer';


function App() {

  return (
    <div className="">
      <Navbar></Navbar>
      <div className='container mx-auto my-4 md:my-8'>
      <Body></Body>
      </div>
      <Questions></Questions>
      <Footer></Footer>
    </div>
  );
}

export default App;
