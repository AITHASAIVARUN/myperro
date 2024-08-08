import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import Navbar from "./components/Navbar";
import './App.css'
import './index.css'

 
const App = () => {
   return (
      <>
        <Navbar/>
         <Routes>
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
         </Routes>
      </>
   );
};
 
export default App;