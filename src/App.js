import Home from './components/home/Home';
import Works from './components/works/Works';
import Contacts from './components/contacts/Contacts';
import RequestConformation from './components/confirm-request/RequestConformation';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import './App.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <>
        <Routes>
          <Route
            path='/'
            element={<Home />}></Route>
          <Route
            path='/works'
            element={<Works />}></Route>
          <Route
            path='/contacts'
            element={<Contacts />}></Route>

          <Route
            path='/request-conformation'
            element={<RequestConformation />}></Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
