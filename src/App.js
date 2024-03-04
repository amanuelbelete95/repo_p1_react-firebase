import Home from './components/home/Home';
import Works from './components/works/Works';
import Contacts from './components/contacts/Contacts';
import Teams from './components/teams/Teams';
import RecyclingTeam from './components/teams/recycling-team/RecyclingTeam';
import AwarennesTeam from './components/teams/awareness-team/AwarenessTeam';
import DisposalTeam from './components/teams/disposal-team/DisposalTeam';

import RequestConformation from './components/confirm-request/RequestConformation';
import NoMatch from './components/nomatch/NoMatch';
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
            element={<Home />}
          />
          <Route
            path='works'
            element={<Works />}
          />
          <Route
            path='contacts'
            element={<Contacts />}
          />

          <Route
            path='teams'
            element={<Teams />}>
            <Route
              index
              element={<RecyclingTeam />}
            />
            <Route
              path='recycling-team'
              element={<RecyclingTeam />}
            />
            <Route
              path='awareness-team'
              element={<AwarennesTeam />}
            />
            <Route
              path='disposal-team'
              element={<DisposalTeam />}
            />
          </Route>

          <Route
            path='/request-conformation'
            element={<RequestConformation />}
          />

          <Route
            path='*'
            element={<NoMatch />}
          />
        </Routes>
      </>
    </div>
  );
}

export default App;
