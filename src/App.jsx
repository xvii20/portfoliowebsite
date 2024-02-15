import React from 'react';
import Navbar from './Navbar';
import Aboutsection from './Aboutsection';
import Portfoliosection from './Portfoliosection';
import Contact from './Contact';
import Layout from './Layout';
import Successpage from './successpage';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  NavLink,
  useParams,
  useNavigate,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

function Animatedroutes() {
  const location = useLocation();
  return (
    // this location allows framer motion to know which route you are on.
    // mode="wait" basically ensures that elements that are exiting (leaving the DOM) complete their exit animations before new elements enter (enter the DOM). In other words, it makes sure that the exit animation finishes before the enter animation begins.
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          {' '}
          {/* see this open arrow*/}
          <Route index element={<Aboutsection />} />
          <Route path="/" element={<Aboutsection />} />
          <Route path="/about" element={<Aboutsection />} />
          <Route path="/portfolio" element={<Portfoliosection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Successpage />} />
        </Route>
        {/* see this self enclosing route tag?? */}
      </Routes>
    </AnimatePresence>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Animatedroutes />
    </BrowserRouter>
  );
};

export default App;
