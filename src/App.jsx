import { Routes, Route } from 'react-router-dom'; 
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import ContactUs from './views/ContactUs'; 
import AboutUs from './views/AboutUs'; 
function App() {
  return (
    <Routes>
      {/* BaseLayout is applied for all child routes */}
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/available-cats" element={<AvailableCats />} /> {/* Available Cats page */}
        <Route path="/contact-us" element={<ContactUs />} /> {/* Contact Us page */}

      </Route>
    </Routes>
  );
}

export default App;
