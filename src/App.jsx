import React from 'react';
import styles from './style';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar , Footer , Home , About, NavbarCopy,  } from './components';
import ContactUs from './contactUs';
import Remark from './remark';
import NotFound from './notFound';

const Layout = ({ children }) => (
  <div className='bg-secondary w-full overflow-hidden'>
    
    <NavbarCopy />
      {children}
      
    <div className={`bg-secondary ${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
      <Footer />
      </div>
    </div>
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/ZeroToOneCo/*"
        element={
          <Layout>
            <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contactUs" element={<ContactUs />} />
            <Route path="remark" element={<Remark />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  </Router>
);

export default App;
