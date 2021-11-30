import logo from './logo.svg';
import './App.css';
import Header from './Component/Header.jsx';
import Sidebar from './Component/Sidebar';
import Container from './Component/container';
import Foot from './Component/footer';


function App() {
  return (
<div className="root">
    <Header />
    <Sidebar />
    <Container />
    <Foot />
</div>
    
  );
}


export default App;
