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
import StillLifeI from './routes/Work/projects/StillLifeI';
import Folklore from './routes/Work/projects/Folklore';
import UndressCode from './routes/Work/projects/UndressCode';
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
        <Route exact path="/archive/still-life-i" element={<StillLifeI/>} />
        <Route exact path="/archive/folklore" element={<Folklore/>} />
        <Route exact path="/archive/undress-code" element={<UndressCode/>} />
        <Route exact path="/archive/ribbon" element={<ProjectPlaceholder/>} />
        <Route exact path="/archive/beatriz-jardinha-ii" element={<ProjectPlaceholder/>} />
        <Route exact path="/archive/pastel-dreams" element={<ProjectPlaceholder/>} />
        <Route exact path="/archive/maria-do-carmo-studio" element={<ProjectPlaceholder/>} />
        <Route exact path="/archive/beatriz-jardinha-iii" element={<ProjectPlaceholder/>} />
        <Route exact path="/archive/beatriz-jardinha-iv" element={<ProjectPlaceholder/>} />
        <Route exact path="/archive/lfw" element={<ProjectPlaceholder/>} />
        <Route exact path="/archive/palmiza" element={<ProjectPlaceholder/>} />
        <Route exact path="/archive/non-manon" element={<ProjectPlaceholder/>} />
        <Route exact path="/archive/omer-gilony" element={<ProjectPlaceholder/>} />
      </Routes>
    </Router>
  </div>
);

export default App;
