import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Signup from './Components/User/Signup';
import Signin from './Components/User/Signin';
import Dashboard from './Components/Dashboard/Dashboard';
import Events from './Components/event/viewevents/Events';
import AddEvent from './Components/event/addevents/AddEvent';
import ShowEvents from './Components/event/showevents/ShowEvents';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header onSearch={handleSearch} />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/event' element={<Events />} />
          <Route path='/addevent' element={<AddEvent />} />
          <Route path='/showevents' element={<ShowEvents searchQuery={searchQuery} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
