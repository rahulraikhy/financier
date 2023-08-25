import { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import './App.css';
import Graph from '../../components/Graphs/Graph';

import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

import { Routes, Route } from 'react-router-dom';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/orders/new' element={<NewOrderPage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }

      <div className='App'>
        <div className='container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800'>
          <h1 className='text-4xl py-8 mb-10 bg-slate-800 text-white rounded'>Expense Tracker</h1>

          <div className='grid md:grid-cols-2 gap-4'>
            <Graph></Graph>
          </div>
        </div>
      </div>
    </main>
  );
}


