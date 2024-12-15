import { Routes, Route } from 'react-router-dom'; // Importing correct methods from 'react-router-dom'
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import ContactUs from './views/ContactUs'; // Import the ContactUs component

function App() {
  return (
    <Routes>
      {/* BaseLayout is applied for all child routes */}
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/available-cats" element={<AvailableCats />} /> {/* Available Cats page */}
        <Route path="/contact-us" element={<ContactUs />} /> {/* Contact Us page */}
      </Route>
    </Routes>
  );
}

export default App;
