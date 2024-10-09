import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Fixtures from "./pages/Fixtures";
import Results from "./pages/Results";
import Table from "./pages/Table";
import Footer from "./components/Footer";
import Campaign from "./pages/Campaign";
import ActionPlan from "./pages/ActionPlan";
import Reporting from "./pages/Reporting";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <div className="content-wrapper poppins">
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/fixtures' element={ <Fixtures /> } />
            <Route path='/results' element={ <Results /> } />
            <Route path='/table' element={ <Table /> } />
            <Route path='/campaign' element={ <Campaign /> } />
            <Route path='/action-plan' element={ <ActionPlan /> } />
            <Route path='/reportracism' element={ <Reporting /> } />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  )
};

export default App;