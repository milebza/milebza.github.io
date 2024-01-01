import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Work from './routes/Work';
import ProjectPlaceholder from './routes/Work/ProjectPlaceholder';
import NinfaHandmade from './routes/Work/projects/NinfaHandmade';
import BeatrizJardinhaModel from './routes/Work/projects/BeatrizJardinhaModel';
import InesInes from './routes/Work/projects/InesInes';
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
        <Route exact path="/archive/project" element={<ProjectPlaceholder/>} />
        <Route exact path="/archive/ninfa-handmade" element={<NinfaHandmade/>} />
        <Route exact path="/archive/beatriz-jardinha-i" element={<BeatrizJardinhaModel/>} />
        <Route exact path="/archive/ines-ines" element={<InesInes/>} />
      </Routes>
    </Router>
  </div>
);

export default App;
