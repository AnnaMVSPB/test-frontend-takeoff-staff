import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../login/Login';
import ContactsList from '../contactsList/ContactsList';
import './App.css';
import Nav from '../nav/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/contactsList' element={<ContactsList />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
