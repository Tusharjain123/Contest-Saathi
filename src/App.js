import Navbar from './components/Navbar';
import "./App.css"
import Contest from "./components/Contest"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Subscription from './components/Subscription';
import SubscriptionCancel from './components/SubscriptionCancel';
import Background from './components/Background';
import Update from './components/Update';

function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Background/>}/>
      <Route path="/contest" element={<Contest/>}/>
      <Route path='/subscription' element = {<Subscription/>}/>
      <Route path='/update' element = {<Update/>}/>
      <Route path='/unsubscribe' element = {<SubscriptionCancel/>}/>
    </Routes>
    </Router>
    );
}

export default App;
