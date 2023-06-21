import Navbar from './components/Navbar';
import React from 'react';
import "./App.css"
import Contest from "./components/Contest"
import {
  Routes,
  Route
} from "react-router-dom";
import Subscription from './components/Subscription';
import SubscriptionCancel from './components/SubscriptionCancel';
import Background from './components/Background';
import Update from './components/Update';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Background />} />
        <Route exact path="/contest" element={<Contest />} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/update' element={<Update />} />
        <Route path='/unsubscribe' element={<SubscriptionCancel />} />
      </Routes>
    </>
  );
}

export default App;
