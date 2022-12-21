import './App.css';
import { Routes,Route } from 'react-router-dom';
import Register from './componet/Register';
import Header from './componet/Header';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
