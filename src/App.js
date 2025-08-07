import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Work from './routes/Work';
import Shop from './routes/Shop';
import About from './routes/About';
import ScrollToTop from './components/ScrollToTop';

const App = () => (
  <div>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<About/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/archive" element={<Work/>} />
        <Route exact path="/book" element={<Shop/>} />
      </Routes>
    </Router>
  </div>
);

export default App;
